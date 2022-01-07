<template>
  <div class="dashboard-container">
    <svg id="canvas" :height='height' :width='width' class="svg" />
  </div>
</template>

<script>
import * as d3 from 'd3';
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Wheel",
  components: {  },
  data() {
    return {
      categories: [],
      circles: 10,  // Количество кругов
      radius: 35,   // Радиус окружности
      width: 1000,  // Ширина блока круга
      height: 800   // Высота блока круга
    }
  },
  computed: {
    ...mapGetters(['getCategories']),
    sections()  { return this.categories.length  },                   // Количество секторов у круга (количество категорий)
    max_radius() { return this.circles * this.radius + 0.5 * this.radius },    // Максимальное удаление текста от центра
    angle() { return Math.PI * 2 / this.sections }                  // угловой размер каждого сектора на круге
  },
  methods: {
    ...mapActions(["updateCategory"]),
    clickHandler(event) {
      const x = event.layerX - this.width / 2;
      const y = event.layerY - this.height / 2;
      const radius = Math.hypot(x, y);
      const circle = Math.abs(Math.ceil((radius - this.radius) / this.radius));
      let clickAngle = Math.atan2(x, -y);
      if (clickAngle < 0)
        clickAngle = Math.PI * 2 + clickAngle;
      const sector = Math.floor(clickAngle / this.angle)
      const cat = {...this.categories[sector], num: circle + 1}
      this.updateCategory(cat)
      this.renderWheel()
    },
    renderWheel() {
      const svg = d3.select('#canvas');
      const width = parseInt(svg.attr('width'));
      const height = parseInt(svg.attr('height'));
      svg.selectAll('g').remove();
      const g = svg.append('g')
          .attr('transform', `translate(${width/2},${height/2})`);
      for (let i = 0; i < this.sections; i++) {
        const numGoalsBySection = this.categories[i].num
        for (let k = 0; k < this.circles; k++) {
          const color = k < numGoalsBySection ? this.categories[i].color : 'white'
          g.append("path")
              .attr("d", d3.arc()
                  .innerRadius(this.radius * k)
                  .outerRadius(this.radius * (k + 1))
                  .startAngle(this.angle * i)
                  .endAngle(this.angle * (i + 1))
              )
              .attr('stroke', 'black')
              .attr('fill', color)
              .attr('id', 100*i + k)
              .on('click', this.clickHandler)
        }
      }
      for (let i = 0; i < this.sections; i++) {
        let x_cur = this.max_radius * Math.sin(this.angle * i + this.angle/2);
        let y_cur = this.max_radius * -Math.cos(this.angle * i + this.angle/2);
        if (x_cur < 0)
          x_cur = x_cur - 6 * this.categories[i].name.length
        g.append('text')
            .attr("x", x_cur)
            .attr("y", y_cur)
            .text(`${this.categories[i].name}: ${this.categories[i].num}`)
      }
    }
  },
  mounted() {
    this.categories = this.getCategories
    this.renderWheel()
  }
};
</script>

<style lang="sass" scoped>
.dashboard
  display: flex
  &-container
    display: flex
    height: calc(100vh - 200px)
    justify-content: center
    position: relative
.svg
  position: absolute
</style>