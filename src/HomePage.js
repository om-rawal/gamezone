import React from "react";
import { ListGroup} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css'


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = { finalList:[['GTA V','https://www.rockstargames.com/gta-v'], ['CS: GO','https://blog.counter-strike.net/'], ['Call of Duty','https://www.callofduty.com/']],
                        items:null,
    }
    
    }
    genreSelected(selectedGenre) {
        console.log('hit on genre selection');
        var action = [['GTA V','https://www.rockstargames.com/gta-v'], ['CS: GO','https://blog.counter-strike.net/'], ['Call of Duty','https://www.callofduty.com/']];
        var adventure = [['GTA V','https://www.rockstargames.com/gta-v'], ['Minecraft','https://www.minecraft.net/']];
        var arcade = [['Space Invaders','https://elgoog.im/space-invaders/'], ['Pacman','https://www.google.com/logos/2010/pacman10-i.html'], ['Donkey Kong','https://freekong.org/']];
        var puzzle = [['Sudoku','https://sudoku.com/'], ['Minesweeper','https://minesweeper.online/'], ['Chess','https://www.chess.com/']];
        var racing = [['Need For Speed','https://www.ea.com/games/need-for-speed'], ['Asphalt','https://asphaltlegends.com/'], ['Forza','https://forza.net/']];
        var shooting = [['CS: GO','https://blog.counter-strike.net/'], ['Call of Duty','https://www.callofduty.com/'], ['PUBG','https://na.battlegrounds.pubg.com/']]
        if (selectedGenre === 'action') this.setState({ finalList: action });
        else if (selectedGenre === 'adventure') this.setState({ finalList: adventure });
        else if (selectedGenre === 'arcade') this.setState({ finalList: arcade });
        else if (selectedGenre === 'puzzle') this.setState({ finalList: puzzle });
        else if (selectedGenre === 'racing') this.setState({ finalList: racing });
        else if (selectedGenre === 'shooting') this.setState({ finalList: shooting });
        else this.setState({ finalList: undefined });
        console.log(this.state.finalList);
        this.setState({items : this.state.finalList.map((word, idx) => {
            console.log("word is "+word);
            return <ListGroup.Item style={{'width':'40%','color':'blue'}} variant="success"key={idx}><a target="_blank" rel="noreferrer" style={{'color':'blue'}} id='navlink' href={word[1]}>{word[0]}</a></ListGroup.Item>
        })});
    };
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
                <h1>Welcome to GameZone</h1>
                <hr />
                <Carousel fade autoPlay={true} interval={3000}>
                    <Carousel.Item style={{ 'height': "600", 'width': '90%',"padding-left": "15%", }}>
                        <img style={{ 'height': "600", 'width': '90%' }}
                            src="https://i.ibb.co/FXvtDNM/Wallpaper-Dog-10873456.jpg"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption style={{"padding-left": "15%",}} >
                            <a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">
                                <h3>CS:GO</h3>
                            </a>
                            <p>This is a First-Person Shooter Game</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "600", 'width': '90%',"padding-left": "15%", }}>
                        <img style={{ 'height': "600", 'width': '90%' }}
                            src="https://i.ibb.co/1sYP5JB/Wallpaper-Dog-20488894.jpg"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption style={{"padding-left": "15%",}}>
                            <a href="https://www.rockstargames.com/gta-v">
                                <h3 class='backGround' >GTA V</h3>
                            </a>
                            <p class='backGround'>This is an Action-Adventure Game</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "600", 'width': '90%',"padding-left": "15%", }}>
                        <img style={{ 'height': "600", 'width': '90%' }}
                            src="https://images6.alphacoders.com/601/601245.png"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption style={{"padding-left": "15%",}}>
                            <a href="https://store.steampowered.com/app/1262560/Need_for_Speed_Most_Wanted/">
                                <h3>NFS Most Wanted</h3>
                            </a>
                            <p>This is a Racing Game</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "600", 'width': '90%',"padding-left": "15%", }}>
                        <img style={{ 'height': "600", 'width': '90%' }}
                            src="https://mcdn.wallpapersafari.com/medium/81/7/k57F8m.jpg"
                            alt="First Slide" >
                        </img>
                        <Carousel.Caption style={{"padding-left": "15%",}}>
                            <a href="https://www.callofduty.com/">
                                <h3>Call Of Duty</h3>
                            </a>
                            <p>This is a Action Game Realted to Battle</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <hr />
                <div>
                    <h2 style={{ 'display': 'inline' }}>Select the genre:</h2>&emsp;&emsp;
                    <DropdownButton style={{ 'display': 'inline' }} id="dropdown-basic-button" title="Genres">

                        <Dropdown.Item onClick={() => console.log(this.genreSelected('action'))}>Action</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log(this.genreSelected('adventure'))}>Adventure</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log(this.genreSelected('arcade'))}>Arcade</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log(this.genreSelected('puzzle'))}>Puzzle</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log(this.genreSelected('racing'))}>Racing</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log(this.genreSelected('shooting'))}>Shooting</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div class="spaceleft20">
                    <hr/>
                    <ListGroup >
                        <ListGroup.Item style={{'width':'40%'}} variant="primary">The Games of the selected genre are:</ListGroup.Item>

                        {
                            this.state.items
                        }
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