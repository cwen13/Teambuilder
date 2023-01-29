
const bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>`;

const fontAwe = `<link rel="stylesheet" href="https://kit.fontawesome.com/a284b5a489.css" crossorigin="anonymous"/>`;

const header = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <meta name="Team Builder" content="A CLI that creates a team for you witha few questions"/>
  ${bootstrap}
  ${fontAwe}
  <title>The Team's Team</title>
</head>`;

const bodyTop = `<body class="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-dark">
    <section class="w-100 d-flex flex-row flex-wrap justify-content-around">`;


const footer = `    </section>
  <footer class="text-white" >
    <p>Made by Teambuild</p>
    <p>Developed by Cody Wenrich</p>
    <p>Powered by <a href="https://github.com/cwen13">Github</a></p>
  </footer>

</body>
</html>`;

module.exports = { bootstrap,
	           fontAwe,
	           header,
	           bodyTop,
	           footer
		 };

