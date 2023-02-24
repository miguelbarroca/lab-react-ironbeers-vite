import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <img src="src/assets/beers.png" alt="beers"/>
      <Link to={'/beers'}>All Beers</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tellus et metus viverra lobortis sed ut ligula. Ut efficitur dapibus ipsum eu ultrices. Maecenas et ante hendrerit, sodales velit quis, congue magna. Pellentesque sem est, blandit quis ante faucibus, varius elementum neque. In mattis eget nibh quis pellentesque. Duis egestas ac enim vel tristique. Sed eget mattis felis. Maecenas sagittis vestibulum congue. Vivamus vitae tempus risus. Quisque augue risus, pretium quis lobortis vel, iaculis nec nisi.</p>
      <img src="src/assets/new-beer.png" alt="beers"/>
      <Link to={'/new-beer'}>New Beer</Link>
      <p>Nam ullamcorper quis orci quis ultricies. Etiam sollicitudin turpis quis luctus pulvinar. Quisque sit amet vestibulum massa. Etiam mollis sodales urna, nec tristique augue consectetur et. Phasellus sagittis risus eu posuere faucibus. Nulla sed ante maximus, fermentum lectus nec, eleifend nisl. Nunc lacinia gravida rhoncus.</p>
      <img src="src/assets/random-beer.png" alt="beers"/>
      <Link to={'/random-beer'}>Random Beer</Link>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a elit lectus. Nulla facilisi. Praesent dignissim mauris eget convallis posuere. Etiam consequat elementum velit, vel viverra mauris consectetur sit amet. In condimentum porta nibh sit amet condimentum. Vivamus tellus augue, rhoncus non ipsum ac, consectetur mollis nibh. Vivamus a mollis sapien. Etiam sodales nisi et ullamcorper elementum. In hac habitasse platea dictumst. Quisque pharetra sollicitudin dui, id tempor massa rhoncus eu.</p>
    </div>
  )
}

export default Home