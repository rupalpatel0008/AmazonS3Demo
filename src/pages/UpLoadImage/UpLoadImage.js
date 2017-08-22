import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from './../../components';
import { UpLoadImageStyle } from './UpLoadImageStyle';
import { Images, Colors } from './../../theme';
import {
  updateProfilePicture,
} from '../../actions';

var ImagePicker = require('react-native-image-picker');

const pickerOptions = {
  title: 'Select Profile Photo',
  takePhotoButtonTitle: 'Camera',
  chooseFromLibraryButtonTitle: 'Choose from Library',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};

class UpLoadImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false,
    };

  }

  addProfilePicture() {
    ImagePicker.showImagePicker(pickerOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.props.updateProfilePicture(source);
      }
    });
  }

  renderProfilePictureStyle() {
    if(this.props.profilePicture == Images.addProfilePicture) {
      return UpLoadImageStyle.headerImage;
    } else {
      return UpLoadImageStyle.profileImage;
    }
  }

  renderLogo() {
    return (<View style={UpLoadImageStyle.group1}>
      <Image
        style={this.renderProfilePictureStyle()}
        source={this.props.profilePicture}
      />
    </View>);
  }

  renderMessage() {
    return (<View style={UpLoadImageStyle.group2}>
      <Text style={UpLoadImageStyle.titleStyle}>
        ADD PROFILE PICTURE
      </Text>
      <Text style={UpLoadImageStyle.textStyle}>
        Add a profile photo so your friends know it’s you.
      </Text>
    </View>);
  }

  renderButton() {
    return (<View style={UpLoadImageStyle.group3}>
      <Button
        onPress={() => this.addProfilePicture()}
        onHideUnderlay={() => { this.setState({ pressStatus: false }); }}
        onShowUnderlay={() => { this.setState({ pressStatus: true }); }}
        style={[UpLoadImageStyle.buttonStyle,
          this.state.pressStatus ? { backgroundColor: Colors.secondaryDarker } :
          { backgroundColor: Colors.secondary }]}
      >
        <Text
          style={UpLoadImageStyle.buttonText}
        >
          ADD A PHOTO
        </Text>
      </Button>
    </View>);
  }

  render() {
    return (
      <View style={UpLoadImageStyle.pageContainer}>
        {this.renderLogo()}
        {this.renderMessage()}
        {this.renderButton()}
        {this.props.loading && (
          <Spinner
            visible={this.props.loading}
            overlayColor='rgba(0, 0, 0, 0.75)'
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ awsDemoReducer }) => {
  const { profilePicture, loading } = awsDemoReducer;
	return { profilePicture, loading };
};

export default connect(mapStateToProps, {
	updateProfilePicture,
})(UpLoadImage);
