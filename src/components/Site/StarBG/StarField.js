import React, { Component } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import gsap, { TimelineLite } from "gsap";
import { Spring, animated } from 'react-spring/renderprops-konva';
import StarState from './StarState';

class StarField extends Component{
    constructor(props){
        super(props)
        //// Tween Logic
        this.myTween = new TimelineLite({paused: true});
        
        //// Elements
        // Element container to store the incoming
        // Stars to be animated
        this.myElements = [];
        
        //// Stars Array 
        // Has all of the stars props
        // Might delete, super hog on resources
        this.stars = StarState();
    }

    // Only storing an isOn bool for now
    // I was thinking about maybe adding 
    // another animation
    state = { isOn: false };


    componentDidMount(){
        //// Sets a 2s timer for the stars to turn on and off
        // -> This Coincides with the Maximum randomized duration 
        // -> Each star in mind should be treated as if
        // each one has a dynamic duration from 1-3 Seconds
        setInterval(() => {
            this.setState(prevState => ({ isOn: !prevState.isOn }));
        }, 1000);
    }

    render(){
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {this.stars.map((star, index) => (
                        <Spring
                            key={star.id}
                            id={star.id}
                            native
                            // Starting Point
                            // Instantiate all the stars in their requested
                            // Positions and then Modify the opacity in the
                            // to logic, leave everything else alone
                            // except for maybe the colors
                            from={{ 
                                x: star.x,
                                y: star.y,
                                stroke: `#${star.color}`,
                                strokeWidth: 2,
                                opacity: 1
                            }}

                            //// Animation Point ////
                            // -> If the Bool trips true then the left will
                            // evaluate and turn the stars on, the only
                            // thing that should be affected is the Opacity
                            // -> Maybe in the future I can add some form of
                            // an intensity?
                            to={{
                                opacity: this.state.isOn ? Math.random() : Math.random()
                            }}
                            >
                            {props => (
                                <animated.Rect {...props}/>
                            )}
                        </Spring>
                    ))}
                </Layer>
            </Stage>
        );
    }
}

export default StarField;