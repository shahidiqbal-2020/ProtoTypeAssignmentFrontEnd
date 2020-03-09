import React, { Component } from 'react';
import Configuration from './Configuration';
//import Assignment from '././Components/Assignment';
import './App.css';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.config = new Configuration();
        this.state = {
            apiResult: [],
            isLoading: true
        }

    }

    componentDidMount() {
        fetch(this.config.STARWARS_API_URL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ apiResult: data })
                this.setState({ isLoading: false })
                console.log(data)
            })
            .catch(console.log)
    }


    DisplayLogestMovieCrawl = () => this.state.apiResult.longestCrawlMovie.map(item =>
        <tr>
            <td align="center">  </td>
            <td>
                {item.title}  
                   
            </td>
        </tr>);
    DisplayMostAppearedCharacter = () => this.state.apiResult.mostAppearedCharacter.map(item =>
        <tr key={item.name} className="Answer" align="center">
            <td>
                {item.name}     Films    : ({item.movies})
            </td>
        </tr>);
    DisplayMostAppearedSpecies = () => this.state.apiResult.mostAppearedSpecies.map(item =>
        <tr key={item.species} className="Answer" align="center">
            <td>
                 {item.species}  ({item.films})
            </td>
        </tr>);
    DisplayPlanetLargestNumberOfVehiclePilots = () => this.state.apiResult.planetMostVehiclePilots.map(item =>
        <tr key={item.planet} className="Answer" align="center" border="1">      
            <td>
                Planet    : {item.planet} - Pilots : ({item.nimberOfPilots})   {item.pilotSpecies}
            </td>
        </tr>);
    
    render() {
        if (this.state.isLoading) {
            return <p clas="Question">Loading   .....</p>;
        }

        return (
            <div>
                <table width="100%">
                    <thead>
                        <tr><th></th><th align="center"></th></tr>
                    </thead>
                    <tbody>
                        <tr className="Question" align="center">
                            <td>Which of all Star Wars movies has the longest opening crawl (counted by number of characters)?</td></tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr className="Answer" align="center">
                            <td>{this.DisplayLogestMovieCrawl()}</td></tr>
                            
                        <tr><td>&nbsp;</td></tr> <tr><td>&nbsp;</td></tr>
                        <tr className="Question" align="center">
                            <td>What character (person) appeared in most of the Star Wars films?</td></tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr className="Answer" align="center">
                            <td>{this.DisplayMostAppearedCharacter()}</td></tr>
                        
                        <tr><td>&nbsp;</td></tr> <tr><td>&nbsp;</td></tr>
                        <tr className="Question" align="center">
                             <td>What species appeared in the most number of Star Wars films?</td></tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr className="Answer" align="center">
                            <td>{this.DisplayMostAppearedSpecies()}</td></tr>

                        <tr><td>&nbsp;</td></tr> <tr><td>&nbsp;</td></tr>
                        <tr className="Question" align="center">
                            <td>What planet in Star Wars universe provided largest number of vehicle pilots?</td></tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr className="Answer" align="center">
                            <td>{this.DisplayPlanetLargestNumberOfVehiclePilots()}</td></tr>
                            
                    </tbody>
                </table>                
            Loaded.... 
        </div>    
            );
        }
    }
    
    
    
    
    
