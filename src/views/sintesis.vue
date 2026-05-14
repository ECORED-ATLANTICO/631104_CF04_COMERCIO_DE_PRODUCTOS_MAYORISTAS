<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El contar con personal capacitado en ventas, permite la optimización de recursos, contar y valorar su inventario, la importancia radica en el seguimiento, el análisis y la gestión  del mismo. Los conocimientos obtenidos de las evaluaciones de inventario son necesarios para el éxito, ya que ayudan a las empresas a tomar decisiones empresariales más inteligentes y rentables, garantizando así la eficacia en los procesos, fomentando la responsabilidad social en actividades de  adquisición y entrega de productos al mercado con  calidad y sostenibilidad.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre ventas y herramientas comerciales. En la parte superior se presenta el concepto de ventas y se explica que son importantes porque constituyen la fuente de ingresos para las empresas. Luego se indica que los responsables de realizar las ventas son los vendedores. A continuación, se muestran las herramientas que utilizan los vendedores: etiqueta empresarial, mezcla de mercadeo, propuesta comercial y técnicas de ventas. La mezcla de mercadeo se divide en cuatro variables: producto, precio, plaza y promoción o comunicación. Finalmente, se presentan dos técnicas de ventas: Características, Ventajas y Beneficios (CVB) y Atención, Interés, Deseo y Acción (AIDA), así como Situación, Problema, Implicación y Necesidad (SPIN) y Situación, Invaluable, Alineado con los intereses y Prioridad (SNAP).")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
