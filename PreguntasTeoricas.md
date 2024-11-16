Teoría:
Preguntas generales sobre HTTP/HTTPS:

¿Qué es HTTP y cuál es su función principal?

HTTP es la sigla de protocolo de transferencia de hipertexto. Es el método principal por el cual los datos de las páginas web se transfieren a través de una red. Las páginas web se almacenan en servidores, que luego se envían al cliente cuando el usuario accede a ellas.
Y la red resultante de todas estas conexiones crea la red mundial tal como la conocemos hoy. Sin HTTP, la World Wide Web (WWW) no existiría tal como la conocemos.
El http, es un lenguaje que media entre las peticiones del cliente y las respuestas del servidor en  Internet, para permitir una comunicación fluida y en un mismo “lenguaje”. Este protocolo establece las pautas a seguir, los métodos de petición,  y cuenta con cierta flexibilidad para incorporar nuevas peticiones y funcionalidades, en especial a medida que se avanza en sus versiones.
¿Cuál es la diferencia entre HTTP y HTTPS?
HTTPS son las siglas de "Protocolo de transferencia de hipertexto seguro". Se trata de una versión más segura del protocolo HTTP, que es el que se utiliza para enviar datos entre un navegador y un sitio web. 
La principal diferencia entre HTTP y HTTPS es que el HTTPS encripta la comunicación entre el navegador y el servidor, lo que hace que la conexión sea más segura. Esto es especialmente importante cuando se transmiten datos confidenciales

¿Cómo funciona el proceso de cifrado en HTTPS?
HTTPS utiliza el certificado de un proveedor externo para asegurar, y proteger, una conexión y así verificar que el sitio sea legítimo. Este certificado de seguridad se conoce como certificado SSL.
HTTPS se basa en la transmisión de los certificados TLS/SSL, que verifican que un determinado proveedor es quien dice ser. Cuando un usuario se conecta a una página web, esta le envía su certificado SSL, que contiene la clave pública necesaria para iniciar la sesión segura.

¿Qué es un certificado SSL/TLS y cuál es su importancia en HTTPS?
SSL es la abreviatura para "Secure Sockets Layer” (capa de sockets seguros). Esto crea una conexión segura y cifrada entre un navegador y un servidor, y protege la capa de comunicación entre ambos. Este certificado cifra una conexión con un nivel de protección designado en el momento de la compra de un certificado SSL. 
Un certificado SSL proporciona una capa adicional de seguridad para los datos confidenciales a los que no deseas que accedan atacantes al tu sitio para obtener información.
TLS significa seguridad de la capa de transporte. Ayuda a cifrar HTTPS y se puede utilizar para proteger el correo electrónico y otros protocolos. Utiliza técnicas de cifrado que garantizan que los datos no hayan sido manipulados desde que se enviaron, y que las comunicaciones se realicen con la persona real para evitar que se vean datos privados.
La importancia del certificado SSL/TLS en HTTPS es que ayuda a generar confianza con los usuarios. Asegura que el propietario del servidor web sea quien dice ser. Funciona de manera muy similar a una licencia de conducir: confirma la identidad del propietario del servidor.
Existe una capa de protección contra ciertos tipos de ataques cuando se implementa HTTPS, que lo convierte en un elemento básico, y valioso, del sitio web.

¿Qué es un método HTTP? ¿Podrías enumerar algunos de los más utilizados?
Explica las diferencias entre los métodos HTTP GET y POST.
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Existen diferentes métodos HTTP que usamos para enviar o recibir información al momento de interactuar con una API Rest, pero los más comunes son GET, POST, PUT, DELETE.
GET: Este método nos permite solicitar información.
POST: El método post se utiliza para enviar nueva información.
PUT:  Este método lo utilizamos para actualizar información que ya existe.
DELETE: Este método se utiliza  para eliminar registros de nuestro backend.
La gran diferencia entre los métodos HTTP GET y POST, es que uno se utiliza para guardar recursos y el otro para sacarlos.
El método get lo utilizamos para sacar recursos del backend o sea consultamos información. Por ejemplo cuando entramos a la página web “facebook” y nos carga el inicio, eso es un get a esa ruta.
Después el método Post nos sirve para guardar recursos en nuestro backend, es decir, creamos nuestro registro y lo guardamos. Siguiendo con el ejemplo de facebook, el método post sería crearse un perfil de usuario. 

¿Qué es un código de estado HTTP? ¿Podrías mencionar algunos de los más comunes y lo que significan?
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:
Respuestas informativas (100–199), respuestas satisfactorias (200–299), redirecciones (300–399), errores de los clientes (400–499), y errores de los servidores (500–599).
Códigos más comunes:
404 Not Found: El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
408 Request Timeout: Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+,etc.
418 I'm a teapot: El servidor se rehúsa a intentar hacer café con una tetera. Este error es una referencia al Hyper Text Coffee Pot Control Protocol, creado como parte de una broma del April Fools' de 1998.
502 Bad Gateway: Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
504 Gateway Timeout: Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.


¿Qué es una cabecera HTTP? Da ejemplos de cabeceras comunes.
Las cabeceras o headers HTTP, como su nombre lo indica, son parte del Protocolo de Transferencia de Hipertexto (HTTP) y se encargan de transmitir información adicional durante una solicitud o una respuesta HTTP.
Asimismo, además de compartir datos, estas cabeceras facilitan el intercambio de metainformación acerca de un documento entre un navegador y un servidor.
Ejemplos:
Cookie: Esta cabecera de solicitud HTTP tiene las cookies del HTTP almacenadas en pares de nombre/valores enviados previamente por el servidor usando el campo “set cookie”.
Proxy-Authorization: El campo de “Proxy-Authorization” le permite a la app cliente identificarse a sí misma o a la usuaria/o ante un proxy.
Accept-Language: Si el header incluye el campo “Accept-Language” le comunica al servidor la preferencia de idioma.
Authorization: Este campo se emplea en las cabeceras HTTP para autenticar a un “user agent” (la app que funciona como “cliente”) con el servidor. 
Host: La cabecera HTTP “Host” especifica el nombre de dominio del servidor. 

¿En qué consiste el concepto de "idempotencia" en los métodos HTTP? ¿Qué métodos
cumplen con esta característica?
La idempotencia es una propiedad de los métodos HTTP que indica que una acción puede ejecutarse varias veces sin que el resultado o el estado del sistema cambien.
GET, HEAD, PUT, DELETE, OPTIONS y TRACE son métodos idempotentes, lo que significa que es seguro volver a intentarlos o ejecutarlos varias veces sin causar efectos secundarios no deseados. Por el contrario, POST y PATCH generalmente se consideran no idempotentes, ya que sus resultados pueden variar con cada solicitud.

¿Qué es un redirect (redirección) HTTP y cuándo es utilizado?
Es una instrucción que se envía a los navegadores y rastreadores para informarles que una URL se ha movido a otra. Se utiliza para redirigir a los usuarios y a los motores de búsqueda a un nuevo contenido cuando el original ya no está disponible.
Las redirecciones se utilizan al mover contenido a una nueva URL, al eliminar páginas o al cambiar nombres de dominio o fusionar sitios web .
Si no se implementa una redirección, cualquiera que llegue a una página que se haya movido o eliminado, verá un error.

Preguntas técnicas y de seguridad en HTTP/HTTPS:
¿Cómo se asegura la integridad de los datos en una conexión HTTPS?
La integridad de los datos en una conexión HTTPS se asegura mediante los protocolos SSL o TLS. Estos protocolos cifran los datos enviados entre el navegador del usuario y el servidor web, asegurando que la información no pueda ser leída ni manipulada por terceros.
Al cifrar los datos transmitidos entre el usuario y el servidor, HTTPS protege contra numerosos ataques cibernéticos.

¿Qué diferencia hay entre un ataque de "man-in-the-middle" y un ataque de "replay" en un contexto HTTPs?
Man-in-the-Middle (MitM), que en español significa “hombre en el medio”, es un tipo de ataque destinado a interceptar, sin autorización, la comunicación entre dos dispositivos (hosts) conectados a una red.
Para que un ataque MitM funcione correctamente, el delincuente debe asegurarse que será el único punto de comunicación entre los dos dispositivos, es decir, el delincuente debe estar presente en la misma red que los hosts apuntados en el ataque para cambiar la tabla de enrutamiento para cada uno de ellos.
Un Ataque de Repetición (Replay Attack) es una técnica utilizada por ciberdelincuentes para interceptar y reutilizar comunicaciones legítimas con el fin de engañar a un sistema o red. En este ataque, no se alteran los datos, sino que se capturan y retransmiten tal cual, con la esperanza de que el sistema objetivo los acepte como válidos. Este tipo de ataque puede comprometer la seguridad de sistemas de autenticación, transacciones financieras y redes de comunicaciones críticas.
Explica el concepto de "handshake" en HTTPS.
El handshake en HTTPS es un proceso que permite establecer una conexión segura entre un navegador y un sitio web mediante la verificación de los servidores y el intercambio de claves.
Es un procedimiento de autenticación por medio del cual un cliente puede verificar que está recibiendo los datos del servidor web correcto. Las dos principales responsabilidades del handshake son:
Autenticar al servidor.
Intercambio de claves.

¿Qué es HSTS (HTTP Strict Transport Security) y cómo mejora la seguridad de una
aplicación web?
HSTS  consiste en una configuración de seguridad que puede ser incorporada en los sitios web para asegurar que el tráfico se realiza mediante un canal seguro.
Es un mecanismo de política de seguridad web diseñado para proteger los sitios web HTTPS contra ataques de degradación y secuestro de cookies.	
Básicamente, se trata de una configuración que se puede realizar en el dominio donde se está indicando al navegador que se debe comunicar necesariamente por HTTPS, en lugar de HTTP.
Gracias a esta configuración, el navegador no permitirá usar conexiones sin cifrar, por lo que se reducen las posibilidades de que un atacante consiga comunicarse con el sitio web usando HTTP. De ahí viene el nombre de Seguridad de Transporte Estricta.
	
¿Qué es un ataque "downgrade" y cómo HTTPS lo previene?
Un ataque de degradación es un tipo de explotación cibernética en el que un atacante fuerza a un sistema o aplicación a cambiar a un protocolo o versión más antigua y más débil, a menudo para eludir las medidas de seguridad o explotar vulnerabilidades conocidas.
HSTS es un mecanismo que se especifica mediante la cabecera HTTP Strict-Transport-Security. Cuando un navegador recibe esta cabecera de un servidor, sabe que debe rechazar todas las conexiones HTTP que no sean seguras (HTTPS) durante un periodo de tiempo definido. De esta manera, se protege contra ataques de red que intentan interceptar o alterar la comunicación.
Al asegurar que siempre se utilice HTTPS, HSTS impide que un atacante degrade una conexión de HTTPS a HTTP, un ataque conocido como SSL Strip.
¿Qué es el CORS (Cross-Origin Resource Sharing) y cómo se implementa en una
aplicación web?
El intercambio de recursos de origen cruzado (CORS) es un mecanismo de seguridad utilizado por los navegadores web para permitir o restringir las solicitudes de recursos (como archivos JavaScript, CSS, imágenes, etc.) desde un origen (dominio, protocolo y puerto) a otro origen diferente al de la página web actualmente visualizada.
CORS aplica cuando el origen es diferente, por lo tanto se comprueba que sea el mismo protocolo (http o https), el mismo dominio (sin incluir subdominios) y el mismo puerto (80, 443, 8080, etc.). Si el origen que hace la petición no coincide con el origen del recurso entra CORS en juego.
¿Qué diferencia hay entre una cabecera Authorization y una cabecera Cookie?
 La cabecera de petición Authorization contiene las credenciales para autenticar a un usuario en un servidor. En cambio, las cookies se utilizan para verificar la identidad del cliente en una conexión.
¿Qué son las cabeceras de seguridad como Content-Security-Policy o X-Frame-Options?
¿Cómo ayudan a mitigar ataques comunes?
Las cabeceras de seguridad son encabezados de respuesta HTTP que ayudan a proteger los sitios web de ataques.
 El Content Security Policy o Política de Seguridad del Contenido  ( CSP ) , es una capa de seguridad adicional que ayuda a prevenir y mitigar algunos tipos de ataque, incluyendo Cross Site Scripting ( XSS ) y ataques de inyección de datos. Estos ataques son usados con diversos propósitos, desde robar información hasta la desfiguración de sitios o distribución de malware .
El encabezado de respuesta HTTP X-Frame-Options es un encabezado de seguridad que permite a los administradores de sitios web controlar si se puede cargar una página en un iframe. Puede ser usado para indicar si debería permitirsele a un navegador renderizar una página en un <frame>, <iframe>, <embed> u <object>. Las páginas web pueden usarlo para evitar ataques de clickjacking, asegurándose de que su contenido no es embebido en otros sitios.

¿Cuáles son las diferencias entre HTTP/1.1, HTTP/2 y HTTP/3?
HTTP/1.1 es la versión original del protocolo HTTP, publicada entre 1996 y 1997. HTTP/2 y HTTP/3 son versiones actualizadas que buscan mejorar la eficiencia del sistema de transferencia de datos.
Sus principales diferencias son:
Velocidad: HTTP/3 es más rápido que HTTP/2 y HTTP/1.1. 
Seguridad: HTTP/3 es más seguro que HTTP/1.1 y HTTP/2. 
Soporte: HTTP/3 tiene menos soporte que HTTP/1.1 y HTTP/2. 
Protocolo de transporte: HTTP/3 utiliza QUIC (Quick UDP Internet Connections) en lugar del TCP (Protocolo de Control de Transmisión) que usan HTTP/1.1 y HTTP/2. 
Multiplexación: HTTP/2 permite enviar múltiples solicitudes y respuestas simultáneamente, mientras que HTTP/1.1 las carga una a una. 
Compresión: HTTP/2 utiliza la compresión HPACK para reducir el tamaño de los encabezados. 
Server push: HTTP/2 permite que el servidor envíe contenido al cliente antes de que este lo solicite. 

¿Qué es un "keep-alive" en HTTP y cómo mejora el rendimiento de las aplicaciones? 
Una conexión persistente es aquella la cual permanece abierta por un periodo, y puede ser reutilizada por varias peticiones de datos, ahorrando así la necesidad de efectuar nuevas sincronizaciones a nivel de TCP, de esta manera se puede usar más eficazmente el protocolo TCP. Esta conexión no estará abierta permanentemente, si la conexión no se usa, se cerrará después de un tiempo determinado (un servidor puede usar la cabecera Keep-Alive para definir el tiempo mínimo que la conexión debería estar abierta).
Keep-Alive Controla el tiempo durante el cual una conexión persistente debe permanecer abierta. Es un concepto que permite que una sola conexión TCP se envíe y reciba múltiples solicitudes HTTP/respuestas, en lugar de abrir una nueva conexión para cada par de solicitud/respuesta.





Preguntas de implementación práctica:
¿Cómo manejarías la autenticación en una API basada en HTTP/HTTPS? ¿Qué métodos
conoces (Basic, OAuth, JWT, etc.)?
Esquemas de autenticación HTTP (Básico y Bearer)
Autenticación básica HTTP:
Los consumidores de API envían solicitudes de API con un nombre de usuario y una contraseña en un encabezado HTTP. Luego, los proveedores de API validan las credenciales para autenticar a los usuarios de API. Este método simple de autenticación de API carece de seguridad, ya que las solicitudes de API se pueden interceptar fácilmente.
Autenticación Bearer HTTP:
Los consumidores de API envían solicitudes de API con un token de acceso a la API único en un encabezado HTTP. Luego, los proveedores de API validan el token de acceso a la API para autenticar a los usuarios de la API. Este método de autenticación de API es más seguro que el básico, ya que las solicitudes de API no se pueden interceptar fácilmente.
Los métodos más conocidos que escuche son las claves API, OAuth 2.0, esquemas de autenticación HTTP y la autenticación mediante token web JSON (JWT).

¿Qué es un proxy inverso (reverse proxy) y cómo se utiliza en entornos HTTP/HTTPS?
Un proxy inverso es un servidor que se sitúa delante de los servidores web y reenvía las solicitudes del cliente (por ejemplo, el navegador web) a esos servidores web. Los proxies inversos suelen implementarse para ayudar a aumentar la seguridad, el rendimiento y la fiabilidad.
¿Cómo implementarías una redirección automática de HTTP a HTTPS en un servidor?
Se puede implementar de varias formas:
Configurar el protocolo TLS/SSL en el servidor web o de aplicaciones. 
Redirigir a los visitantes a la versión segura (HTTPS) del sitio. 
Agregar código personalizado para forzar la redirección.
¿Cómo mitigarías un ataque de denegación de servicio (DDoS) en un servidor HTTP?
Para mitigar los ataques DDoS, las empresas pueden implementar diversas estrategias. Una de ellas es el uso de servicios de mitigación de DDoS, que pueden filtrar el tráfico malicioso antes de que llegue a la red de la empresa. Esto a menudo se hace a través de la distribución de la carga de tráfico a través de múltiples servidores.							Otra estrategia es la planificación de contingencia y la redundancia de red. Esto puede incluir tener servidores de reserva o rutas de red alternativas para asegurar que los servicios puedan seguir funcionando en caso de un ataque.

También hay métodos como:
Redireccionamiento								
Agujeros negros							
Hundimiento									
Depuración									
Detección de bots

¿Qué problemas podrías enfrentar al trabajar con APIs que dependen de HTTP, y cómo los resolverías?
El uso de HTTP en lugar de HTTPS:  La forma más sencilla de evitar estos problemas comunes de API es crear la API con puntos finales HTTPS. Si no se utiliza un punto final HTTPS, es muy probable que surjan problemas con la API en el futuro.
Uso del método HTTP incorrecto: Si una API puede reconocer la ruta pero puede decir que estás usando el método incorrecto, a menudo se mostrará un error 405 No permitido. Cuando tu llamada a la API devuelve un error, deberías poder volver a verificar la documentación para asegurarte de que estás usando el método HTTP correcto.

¿Qué es un cliente HTTP? Mencionar la diferencia entre los clientes POSTMAN y CURL
Un cliente HTTP es una aplicación que envía solicitudes HTTP a un servidor HTTP.  Se le dice cliente HTTP porque es un cliente que accede a servidores HTTP.
CURL y Postman son dos herramientas ampliamente utilizadas para interactuar con las API, cada una con propósitos distintos y con características únicas. Si bien ambas pueden enviar solicitudes y gestionar respuestas de servidores web, se adaptan a diferentes preferencias de usuario y requisitos técnicos.
CURL es conveniente utilizar para estos casos:
 Scripting y automatización
Aplicaciones del lado del servidor
Soluciones Ligeras
y POSTMAN usarla cuando:
Desarrollo de API
Colaboración en equipo
Prueba de escenarios complejos





Preguntas de GIT
¿Qué es GIT y para qué se utiliza en desarrollo de software?
Es un sistema de control de versiones. Esta herramienta nos permite tener el historial completo de todo el código que hemos desarrollado y registra los cambios de un proyecto.

¿Cuál es la diferencia entre un repositorio local y un repositorio remoto en GIT?
La diferencia es el lugar donde se alojan. Un repositorio remoto se aloja en un servidor remoto (puede estar en Internet o en un servidor externo; incluso puede ser el mismo equipo en una ruta diferente) y se comparte entre varios miembros del equipo. Un repositorio local se aloja en un equipo local para un usuario individual, y es un contenedor de archivos donde se almacena una copia de un proyecto, sus versiones y un registro de cambios.
¿Cómo se crea un nuevo repositorio en GIT y cuál es el comando para inicializarlo?
Para crear un nuevo repositorio utilizamos el comando Git init . 
Explica la diferencia entre los comandos git commit y git push.
git push es un comando que sube los cambios hechos en tu ambiente de trabajo a una rama de trabajo tuya o de tu equipo remota. Commit identifica los cambios hechos en dicho ambiente de trabajo. Si no haces un push de tus cambios, estos jamás se verán reflejados en tu repositorio remoto.											      A nivel de trabajo git push trabaja a nivel de repositorio, es decir con tu repositorio remoto, mientras que git commit trabaja en tu repositorio local
¿Qué es un "branch" en GIT y para qué se utilizan las ramas en el desarrollo de software?
Branch son las ramificaciones o nuevos caminos que toma el proyecto. Estas se utilizan en el desarrollo de software para muchas cosas ya que  son copias del proyecto, pero separadas en la cual trabajas de forma aislada y colaborativa sin dañarlo.
¿Qué significa hacer un "merge" en GIT y cuáles son los posibles conflictos que pueden
surgir durante un merge?
Merge es un comando que nos permite fusionar una o más ramas a la rama master. 
Al fusionar se pueden generar conflictos , estos ocurren cuando se hacen cambios contrapuestos en la misma línea de un archivo o cuando una persona edita un archivo y otra persona borra el mismo archivo.
Describe el concepto de "branching model" en GIT y menciona algunos modelos comunes (por ejemplo, Git Flow, GitHub Flow).
El branching model de Git es una estrategia que usan los equipos de desarrollo para gestionar y hacer seguimiento de los cambios en el código. Proporciona una estructura organizada para el trabajo colaborativo de varios desarrolladores en una base de código compartida.
Ejemplos de modelos comunes:
GitFlow: Define dos tipos de ramas: principales y auxiliares. Las principales son la rama Master y la rama Develop, mientras que las auxiliares son la rama Feature, la rama Release y la rama Hotfix. 
GitHub Flow: Es una alternativa simple y ligera a GitFlow. Se basa en un flujo de trabajo basado en branches que permite a equipos de desarrollo enfocarse principalmente en la entrega continua. En el repositorio tenemos dos tipos de branches:
main (o master): El branch de código principal, es el que contiene el código que está listo para producción.
features: Los branches de funcionalidades que permiten el desarrollo en paralelo.
GitLab Flow: Se caracteriza por un flujo de trabajo bastante similar a GitHub Flow. La principal diferencia es que no solo permite el uso de release branches, sino que adiciona el uso de environment branches, por ejemplo, QA, Pre-Producción y Producción.

¿Cómo se deshace un cambio en GIT después de hacer un commit pero antes de hacer push?
Para deshacer el cambio antes de hacer el push se puede usar el comando git reset.

¿Qué es un "pull request" y cómo contribuye a la revisión de código en un equipo?
Es una función de GitHub que permite a tu equipo solicitar la revisión y aprobación de sus cambios antes de fusionarlos en la rama principal de desarrollo.
¿Cómo puedes clonar un repositorio de GIT y cuál es la diferencia entre git clone y git pull?
Para clonar un repositorio en  GIT podemos usar el comando git clone.
La diferencia entre git clone y git pull es que este último se utiliza para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido. En cambio, git clone, crea una copia de un repositorio remoto en tu repositorio local para poder trabajar en él.

Preguntas de GIT
¿Qué es Node.js y por qué es una opción popular para el desarrollo backend?
Node.js es un entorno local de ejecución de código javascript el cual está basado en el motor de google chrome v8 escrito en C++.  Node como herramienta de trabajo nos permitirá ejecutar código js en nuestros computadores sin hacer uso de un navegador web
¿Cómo funciona el modelo de I/O no bloqueante en Node.js y cómo beneficia el rendimiento de una aplicación backend?
Son aquellas que no bloquean la ejecución de otras operaciones . En las operaciones no bloqueantes, se permite que un solo proceso atienda varias solicitudes simultáneamente.
El modelo de I/O no bloqueante y controlado por eventos permite manejar una gran cantidad de conexiones simultáneas con un alto rendimiento de manera eficiente. 



¿Qué es el Event Loop en Node.js y cuál es su papel en la ejecución de código asincrónico?
Event loop es un bucle interno de JavaScript que se encarga de manejar la cola de tareas pendientes y ejecutarlas de manera secuencial. Estas tareas pueden ser funciones, eventos o cualquier otro tipo de acción que necesite ser ejecutada.
Su papel en la ejecución de código asincrónico permite ejecutar tareas simultáneamente sin esperar a que se completen las demás . Esto permite que el bucle de eventos de Node.js administre de manera eficiente múltiples operaciones simultáneamente, lo que da como resultado un mejor rendimiento y escalabilidad.
¿Cuál es la diferencia entre require() y import en Node.js?
La gran diferencia es que require tiene carga sincrónica e import tiene carga asincrónica. 
Debido a la carga sincrónica, el rendimiento de require es menos eficiente que el de import.
¿Qué es npm y cuál es su función en el ecosistema de Node.js?
Npm son las siglas de node package manager , en sí es el gestor de paquetes de node, el cual nos permitirá muchas soluciones tácticas a la hora de implementar código externo en nuestro proyecto.
¿Cómo se inicializa un proyecto de Node.js usando npm y cuál es el propósito del archivo
package.json?
Para inicializar un proyecto de Node.js usando npm hay que usar el comando npm init.
El propósito del archivo package.json  es que nos ayuda a hacer un seguimiento de todos los paquetes instalados en un proyecto determinado. Esto nos garantiza que la aplicación funcione correctamente al reunir y centralizar toda la información sobre las dependencias del proyecto

¿Qué son las dependencias en npm y cómo se instalan? Explica la diferencia entre
dependencias y dependencias de desarrollo.
Una dependencia es cualquier archivo o variable que utiliza nuestro proyecto, ya sea en la fase de desarrollo o en la fase de producción. O  sea serían los paquetes que un proyecto necesita para funcionar.
Para instalar una dependencia de producción en npm, se usa el comando: npm install <nombre-del-paquete>.

¿Cómo puedes gestionar versiones específicas de paquetes en npm y para qué sirve el
archivo package-lock.json?
La principal diferencia, es que las dependencias en desarrollo no son necesarias para que nuestros usuarios finales las utilice, mientras que las dependencias en producción son indispensables para que nuestros usuarios consuman el software.
¿Qué es nest.js cómo se usa en Node.js para construir aplicaciones backend?
Nest. js es un framework de desarrollo web basado en Node. js que utiliza TypeScript para proporcionar una estructura de programación sólida y altamente escalable. 





¿Cómo se manejan errores en Node.js y cuál es la diferencia entre callbacks, promesas y
async/await para manejar código asincrónico?
Para manejar los errores se pueden usar varias prácticas:
 bloques try-catch.
async/await y promises.
devoluciones de llamada que dan prioridad a los errores.
 eventos y agentes de escucha.
middleware y siguientes funciones.
La diferencia entre callbacks, promesas y async/await radica en que Async/await proporciona la mejor sintaxis de manejo de errores, lo que genera un código mucho más limpio, ya que el encadenamiento de promesas juntos, igual que los callbacks, se pueden poner bastante voluminoso y confuso. 
Cada solución es mejor que la otra, lo cual hace al código más óptimo y más fácil de entender en el caso de que se vuelva complejo.

Preguntas/Ejercicios:

1. Adjuntar imágenes del response de un GET y de un POST de cada punto


















































2. ¿Qué sucede cuando hacemos el GET por segunda vez, luego de haber ejecutado el POST?
Lo que sucede es que al hacer get por segunda vez luego del post creamos un nuevo registro y se guardó y podemos utilizarlo para consultarlo nuevamente.
