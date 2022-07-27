import React from "react";
import { ListGroup} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
class HomePage extends React.Component {
    constructor() {
        super();
        this.state = { finalList:['GTA V', 'CS: GO', 'Call of Duty'],
                        items:null,                    
    }
    }
    genreSelected(selectedGenre) {
        console.log('hit on genre selection');
        var action = ['GTA V', 'CS: GO', 'Call of Duty'];
        var adventure = ['GTA V', 'Minecraft'];
        var arcade = ['Space Invaders', 'Packman', 'Donkey Kong'];
        var puzzle = ['Sudoku', 'Minesweeper', 'Chess'];
        var racing = ['Need For Speed', 'Asphalt', 'Forza'];
        var shooting = ['CS: GO', 'Call of Duty', 'PUBG']
        if (selectedGenre === 'action') this.setState({ finalList: action });
        else if (selectedGenre === 'adventure') this.setState({ finalList: adventure });
        else if (selectedGenre === 'arcade') this.setState({ finalList: arcade });
        else if (selectedGenre === 'puzzle') this.setState({ finalList: puzzle });
        else if (selectedGenre === 'racing') this.setState({ finalList: racing });
        else if (selectedGenre === 'shooting') this.setState({ finalList: shooting });
        else this.setState({ finalList: undefined });
        console.log(this.state.finalList);
        this.setState({items : this.state.finalList.map((word, idx) => {
            return <ListGroup.Item style={{'width':'30%'}} variant="success"key={idx}>{word}</ListGroup.Item>
        })});
    };
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
                <h1>Welcome to GameZone</h1>
                <hr />
                <Carousel fade autoPlay={true} interval={3000} >
                    <Carousel.Item style={{ 'height': "600px", 'width': '1600px', 'maxWidth': '1600px' }}>
                        <img style={{ 'height': "600px", 'width': '1600px', 'maxWidth': '1600px' }}
                            src="https://i.ibb.co/FXvtDNM/Wallpaper-Dog-10873456.jpg"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption >
                            <a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">
                                <h3>CS:GO</h3>
                            </a>
                            <p>This is a First-Person Shooter Game</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "600px", 'width': '1600px', 'maxWidth': '1600px' }}>
                        <img style={{ 'height': "600px", 'width': '1600px', 'maxWidth': '1600px' }}
                            src="https://i.ibb.co/1sYP5JB/Wallpaper-Dog-20488894.jpg"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption>
                            <a href="https://www.rockstargames.com/gta-v">
                                <h3 class='backGround' >GTA V</h3>
                            </a>
                            <p class='backGround'>This is an Action-Adventure Game</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "600px", 'width': '1600px', 'maxWidth': '1600px' }}>
                        <img style={{ 'height': "600px", 'width': '1540px', 'maxWidth': '1540px' }}
                            src="https://images6.alphacoders.com/601/601245.png"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption>
                            <a href="https://store.steampowered.com/app/1262560/Need_for_Speed_Most_Wanted/">
                                <h3>NFS Most Wanted</h3>
                            </a>
                            <p>This is a Racing Game</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "600px", 'width': '1600px', 'maxWidth': '1600px' }}>
                        <img style={{ 'height': "600px", 'width': '1540px', 'maxWidth': '1540px' }}
                            src="https://images2.alphacoders.com/597/597965.jpg"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption>
                            <a href="https://www.callofduty.com/">
                                <h3>Call Of Duty</h3>
                            </a>
                            <p>This is a Action Game Realted to Battle </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <hr />
                <div>
                    <h2 style={{ 'display': 'inline' }}>Select the genre:</h2>&emsp;&emsp;
                    <DropdownButton style={{ 'display': 'inline' }} id="dropdown-basic-button" title="Genres">

                        <Dropdown.Item onClick={() => this.genreSelected('action')}>Action</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.genreSelected('adventure')}>Adventure</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.genreSelected('arcade')}>Arcade</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.genreSelected('puzzle')}>Puzzle</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.genreSelected('racing')}>Racing</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.genreSelected('shooting')}>Shooting</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div class="spaceleft20">
                    <hr/>
                    <ListGroup >
                        <ListGroup.Item style={{'width':'30%'}} variant="primary">The Games of the selected genre are:</ListGroup.Item>
                        {this.state.items}
                        {/* <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                        <ListGroup.Item variant="success">Success</ListGroup.Item>
                        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                        <ListGroup.Item variant="info">Info</ListGroup.Item>
                        <ListGroup.Item variant="light">Light</ListGroup.Item>
                        <ListGroup.Item variant="dark">Dark</ListGroup.Item> */}
                    </ListGroup>
                </div>
            </div>

        );
    }

}
export default HomePage;