import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleContainer: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#B3A0FF",
    marginBottom: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    width: 157,
    height: 32,
    alignItems: "center",

  },
  activeTab: {
    backgroundColor: '#E7FF3F',
    
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  wrapperRecipeOfDay: {
    backgroundColor: "#B3A0FF",
    height: 242,
    width: "100%",
    paddingHorizontal: 35,
    paddingVertical: 20,
    justifyContent: "center",
  },
  wrapperblack: {
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  recipeOfDay: {
    height: 198,
    borderRadius: 20,
    overflow: 'hidden',
  },
  recipeOfDayImage: {
    width: '100%',
    height: '100%',
  },
  recipeOfDayOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  recipeOfDayBadge: {
    backgroundColor: '#E7FF3F',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  badgeText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
  },
  recipeOfDayTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  recipeOfDayInfo: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 4,
    marginRight: 12,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recommendedScroll: {
    flexDirection: "row",
  },
  recipeCard: {
    width: 160,
    marginRight: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: 120,
  },
  playIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  recipeTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    padding: 8,
  },
  recipeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  recipeInfoText: {
    color: '#666666',
    fontSize: 12,
    marginLeft: 4,
    marginRight: 12,
  },
  recipesForYou: {
    gap: 16,
  },
  recipeForYouCard: {
    flexDirection: 'row',
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    overflow: 'hidden',
  },
  recipeForYouInfo: {
    flex: 1,
    padding: 16,
  },
  recipeForYouTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  recipeForYouImage: {
    width: 100,
    height: 100,
  },
});

