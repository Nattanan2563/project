const { version } = require('../../package.json');
const { dependencies } = require('../../package.json');


export default function Home() {
  return (
    <>
      {version}
    </>
  )
}
