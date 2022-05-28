//cant read createNativeStackNavigator<StackParamList>(); without these lines

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};