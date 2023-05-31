import connect from './connect.js';

const getData = async () => {
    const conn = await connect();
    const data = conn.results.map((page, idx) => {
        const object = {
            id: page.id,
            ano: page.properties.ANIO.select.name,
            mes: page.properties.MES.select.name,
            descripcion: page.properties.DESCRIPCION.title[0]?.plain_text,
            monto: page.properties.MONTO.number,
            estado: page.properties.ESTADO.status.name,
            vencimiento: page.properties.VENCIMIENTO?.date?.start || null,
            fechaPago: page.properties.FECHA_PAGO?.date?.start || null,
            seleccion: page.properties.TIPO.select.name,
            factura: page.properties.FACTURA.files[0]?.file || null,
            comprobantes: page.properties.COMPROBANTES.files[0]?.file || null,
        };

        return object;
    });

    return {
        total: conn.results.length,
        data,
    };
};

export { getData };
