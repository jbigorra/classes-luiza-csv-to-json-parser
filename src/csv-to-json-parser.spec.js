const TSV = ' id \t name \t email \n12323123\tPablo Poroto\tp.p@gmail.com\n432423423\tMaria Craig\tmaria.c@gmail.com';

function tsvToArray () {

}

describe('csvToArray', () => {
  describe('Given each line of a tsv file ends with an endOfLine character', () => { // endOfLine = \n
    it('Should convert csv to array', () => {
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

function parseHeaders () {

}

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
