class Helpers {
    sortByKey = (array, key) => {
        return array.sort(function(a, b) {
          return a[key] - b[key];
        });
    }
}

export default new Helpers();