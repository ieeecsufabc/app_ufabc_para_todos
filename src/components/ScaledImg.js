import React, { Component } from "react";
import { Image } from "react-native";

export default class ScaledImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null
        };
    }

    componentWillMount() {
        const { width, height } = Image.resolveAssetSource(this.props.source);

        if (this.props.width && !this.props.height) {
            this.setState({
                width: this.props.width,
                height: height * (this.props.width / width)
            });
        } else if (!this.props.width && this.props.height) {
            this.setState({
                width: width * (this.props.height / height),
                height: this.props.height
            });
        } else {
            this.setState({ width: width, height: height });
        }
    }

    render() {
        const style = this.props.style || {};

        return (
            <Image
                source={this.props.source}
                style={{ height: this.state.height, width: this.state.width, ...style }}
            />
        );
    }
}