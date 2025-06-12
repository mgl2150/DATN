import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from '../../constants/fonts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    marginBottom: 30,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#E2F163",
  },
  backText: {
    color: "#E2F163",
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    marginLeft: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.POPPINS.bold,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 36,
  },
  subtitleContainer: {
    paddingHorizontal: 40,
    marginBottom: 80,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 22,
  },
  dateFormat: {
    fontSize: 32,
    fontFamily: FONTS.POPPINS.bold,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 2,
  },
  triangleIndicator: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#E2F163',
    marginBottom: 30,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 40,
  },
  dropdownBox: {
    backgroundColor: '#B3A0FF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 100,
    height: 56,
  },
  dropdownLabel: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.semiBold,
    color: '#000000',
    marginRight: 8,
  },
  pickerColumn: {
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.semiBold,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  picker: {
    height: 150,
    width: 80,
    backgroundColor: '#B3A0FF',
    borderRadius: 16,
  },
  pickerContent: {
    paddingVertical: 50,
  },
  pickerItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerText: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS.medium,
    color: '#000000',
  },
  pickerTextSelected: {
    fontSize: 22,
    fontFamily: FONTS.POPPINS.bold,
    color: '#000000',
  },
  agePickerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  continueButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 30,
    height: 56,
    width: width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: FONTS.POPPINS.semiBold,
  },
}); 