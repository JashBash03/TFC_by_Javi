# TFC_by_Javi

## Resumen
Este trabajo está enfocado a la creación de un sistema de domotización de una vivienda mediante el uso de un servidor web que recopila la información de los sensores conectados a una Raspberry Pi 3 Modelo B+. La información captada por los sensores es enviada al servidor mediante la herramienta socket.io que nos permite tener la página web actulizada con cualquier cambio que le llegue a esta sin preocupación de saturar la red. Cabe recalcar que este servidor está levantad de forma local, es decir, está levantado en la red individual y se accede a este solo si se está conectado desde otro dispositivo a la misma red. Esto nos permitirá saber en todo momento los valores de la vivienda de los sensores de temperatura, presión, etc, que tenemos conectados. Sin más demora, procedo a explicar con más detenimiento el funcionamiento de este trabajo de investigación y sus respectibas tecnologías utilizadas en el siguiente punto.

## Introducción
La idea de este trabajo surgió en el contexto de usar tanto tecnología usada en clase, en este caso Sockets, y aplicarlo en un ámbito nuevo desde cero usando una tecnología que no tiene nada que ver con lo visto en clase como es la Raspberry Pi. Uniendo ambas cosas surge un resultado capaz de levantar un servidor web que se actualiza constantemente para obtener los valores más actuales de los sensores conectados a dicha placa. El objetivo principal de este trabajo es probar la capacidad de los estudios aprendidos en el grado para ser integrados con tecnología nueva y demostrar la importancia de la actualización de los servidores para darle la mejor información al cliente. Aunque ya existen dispositivos para domotizar casas conectados a un servidor general, este trabajo comprobará que no es necesario usar dichos dispositivos si se tienen los conocimientos necesarios, incluso podría ser aplicable para llevar el seguimiento de los diferentes niveles del agua para un acuario y automatizar el vertido de los productos necesarios o el control de la temperatura del agua. Para llevar a cabo este experimento haré uso de una Raspberry Pi 3 modelo B+ junto con la instalación de su Sistema Operativo propio de Respberry y conectada por HDMI a un monitor para visualizar en todo momento el servidor web. A ella irán conectados una serie de sensores que serán los encargado de tomar todos los valores necesarios para llevar un seguimiento correcto de lo que queramos saber. Crearé un servidor web que se programará con Python y se actualizará constantemente mediante Sockets, tecnología que permite actualizar los datos del servidor sin necesidad de estar subiéndolos manualmente. Este servidor web tendrá una página web sencilla con un estilo sencillo para embellecer mínimamente la página en la que aparecerán los datos. Por último, si queda tiempo tengo pensado crearle una carcasa a todo el conjunto de componentes a modo de casa en caso de usarse para medir los valores de temperatura, luz, presión, etc, o con forma de acuario o pecera en caso de querer medir los valores del agua.

## Estado del arte

## Metodología

## Resultados

## Discusión

## Conclusiones

## Biografía

## Anexos
