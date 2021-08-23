//Finally where I can throw vtex io away and use react!

import React from 'react'

interface CustomFooterProps {}

const CustomFooter: StorefrontFunctionComponent<CustomFooterProps> = ({}) => {
  
  // I do not want to use a separated file for css, so style it is!
  return (
    <div style={{
      position: "absolute",
      width: "100%",
      backgroundColor: "#424242",
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <a style={{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          padding: '5px',
          marginTop: '10px',
          textDecoration: 'none',
          border: '1px solid #59ff00',
          color: '#59ff00',
          borderRadius: '4px'
      }}
        href="https://api.whatsapp.com/send?phone=55999999999999&text=A%20documenta%C3%A7%C3%A3o%20do%20Vtex%20Io%20%C3%A9%20estranha%2C%20%C3%A9%20complicado%20de%20encontrar%20elementos%20basico%20e%20parece%20desorganizada.%20Em%20alguns%20momentos%20passa%20a%20impress%C3%A3o%20que%20roda%20em%20duas%20vers%C3%B5es%20diferentes%2C%20dificultado%20a%20pesquisa.%20A%20parte%20do%20lean%20%C3%A9%20magnifica%2C%20mas%20s%C3%B3%20ela%20n%C3%A3o%20%C3%A9%20o%20suficiente%2C%20algumas%20paginas%20do%20doc%20poderiam%20ter%20fotos%2C%20identificado%20os%20elementos.%20A%20doc%20tem%20omite%20algumas%20fu%C3%A7%C3%B5es%20dos%20elementos.%20A%20parte%20de%20customiza%C3%A7%C3%A3o%20tamb%C3%A9m%20poderia%20ser%20melhorada%2C%20apresentando%20por%20exemplo%20o%20que%20cada%20tag%20css%20modifica%20e%20em%20qual%20documento%20do%20projeto%20ela%20deve%20ficar.">
          Suporte
          <svg fill="#59ff00" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>


        <h4>Desenvolvido por Jhelison Gabriel Lima Uchoa</h4>
    </div>
  )
}

CustomFooter.schema = {
  title: 'editor.CustomFooter.title',
  description: 'editor.CustomFooter.description',
  type: 'object',
  properties: {},
}

export default CustomFooter
