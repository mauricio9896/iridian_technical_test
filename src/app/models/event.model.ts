export interface Events {
  id:      string;
  name:    string;
  markets: Market[];
}

export interface Market {
  id:         string;
  name:       string;
  selections: Selections[];
}

export interface Selections {
  id:    string;
  name:  string;
  price: number;
}
