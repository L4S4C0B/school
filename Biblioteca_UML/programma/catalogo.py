class Catalogo():
    def __init__(self, articoli):
        self.articoli = articoli
    
    def aggiungi(self, item):
        self.articoli.append(item)
    
    def stampa_catalogo(self):
        for i in self.articoli:
            print(i.__str__())
    
    def disponibili(self):
        disponibili = []

        for i in self.articoli:
            if i.disponibile == True:
                disponibili.append(i)
        
        return disponibili

    def cerca_per_tipo(self, tipo):
        tipi = []

        for i in self.articoli:
            if isinstance(i, tipo):
                tipi.append(i)
        
        return tipi