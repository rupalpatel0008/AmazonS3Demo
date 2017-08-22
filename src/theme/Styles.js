import { Colors } from './Colors';

export const Styles = {
  withoutBorderNavigationBarStyle: {
		backgroundColor: Colors.black,
		borderWidth: 0,
    borderWidth: 1,
    alignContent: 'center'
	},
  withBorderNavigationBarStyle: {
		backgroundColor: Colors.black,
		borderBottomColor: 'rgba(255,255,255,0.17)',
		borderWidth: 1,
		alignContent: 'center'
	},
  nextButtonStyle: {
    color: Colors.primary,
    paddingRight: 20,
    fontSize: 16,
    letterSpacing: 0.8
  },
};
