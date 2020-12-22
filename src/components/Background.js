import React, { Component } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesjs-config"

class Background extends Component {
    state = { width: "0px", height: "0px" };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        this.setState({
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`
        });
    };
    render() {
        const { width, height } = this.state;
        console.log(width, height);
        return (
            <Particles
                {...this.state}
                params={ particlesConfig}
            />
        );
    }
}

export default Background;
