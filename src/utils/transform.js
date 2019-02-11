import CustomDate from "./custom-date";

class TransformData {
    static getRole(role) {
        let rol = '';
        switch (role) {
            case 'EXECUTIVE': 
                rol = 'Ejecutivo'
                break;
            case 'ASSISTANT': 
                rol = 'Asistente'
                break;
            case 'ADMIN': 
                rol = 'Administrador'
                break;
            default:
                rol = ''
                break;
        }
        return rol;

    }
    static getCols(obj) {
        const dateFormated = obj.Fecha.length && CustomDate.getSimpleDateFormatMin(obj.Fecha);
        return [
            {
                label: 'DASD'
            },
            {
                label: obj.Volumen
            },
            {
                label: obj.Porcentaje
            },
            {
                label: obj.Precio
            },
            {
                label: obj.Volumen
            },
            {
                label: obj.Volumen
            },
            {
                label: obj.Volumen
            },
            {
                label: obj.Volumen
            }
        ];
    }
}

export default TransformData;
