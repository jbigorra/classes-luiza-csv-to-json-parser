const TSV = ' id \t name \t email \n12323123\tPablo Poroto\tp.p@gmail.com\n432423423\tMaria Craig\tmaria.c@gmail.com';

function tsvToArray (tsvString) {
  return tsvString.split('\n');
}

// we need to pass a parameter to the tsvToArray function from TSV
// we transform the data in the parameter from string to array by splitting by EOL character
// return the array
describe('csvToArray', () => {
  describe('Given each line of a tsv file ends with an endOfLine character', () => { // endOfLine = \n
    it('Should convert csv to array by splitting by EOL character', () => {
      // Given
      const tsvString = TSV;

      // when
      const actualArray = tsvToArray(tsvString);

      // Then
      const expectedArray = [' id \t name \t email ', '12323123\tPablo Poroto\tp.p@gmail.com', '432423423\tMaria Craig\tmaria.c@gmail.com'];
      expect(actualArray).toEqual(expectedArray);
    });
  });
});

function parseHeaders (array) {
  const dirtyHeaders = array[0].split('\t');

  const cleanHeaders = removeTrailingSpacesFrom(dirtyHeaders);

  return cleanHeaders;
}

function removeTrailingSpacesFrom (dirtyHeaders) {
  const cleanHeaders = [];

  for (let i = 0; i < dirtyHeaders.length; i++) {
    const element = dirtyHeaders[i];
    const clean = element.trim();
    cleanHeaders.push(clean);
  }

  return cleanHeaders;
};

// within the given array we point at the first element [0] (headers string)
// we take only this data [0] - headers string
// turn it into array by splitting by \t

describe('parseHeaders', () => {
  describe('Given a tsv string turned into an array', () => {
    it('Should extract the headers and remove trailing white spaces', () => {
      // Given
      const array = tsvToArray(TSV);

      // When
      const actualHeaders = parseHeaders(array);

      // Then
      const expectedHeaders = ['id', 'name', 'email'];
      expect(actualHeaders).toEqual(expectedHeaders);
    });
  });
});

function parseDataRows () {

}

describe('parseDataRows', () => {
  describe('Given a tsv string turned into an array', () => {
    it('Should extract the data from the rows', () => {
      const array = tsvToArray(TSV);

      const actualDataRows = parseDataRows(array);

      const expectedDataRows = ['12323123\tPablo Poroto\tp.p@gmail.com', '432423423\tMaria Craig\tmaria.c@gmail.com'];
      expect(actualDataRows).toEqual(expectedDataRows);
    });
  });
});
