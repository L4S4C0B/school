from mediaItem import MediaItem
from prestabile import Prestabile

class Ebook(MediaItem, Prestabile):
    def __init__(self, titolo, anno, formato, dimensione_mb):
        super().__init__(titolo, anno)
        self.formato = formato
        self.dimensione_mb = dimensione_mb
        self.num_prestiti = 0
    
    def restituzione(self):
        if(self.disponibile == False):
            self.disponibile == True
        else:
            return "L'Ebook è stato già restituito!"
    
    def prestito(self):
        if(self.disponibile == True):
            self.disponibile = False
            self.num_prestiti+=1
        else:
            return "L'Ebook è ancora in prestito!"
    
    def statistiche(self):
        print(f"Ebook {self.titolo} prestato {self.num_prestiti} volte")
    
    def __str__(self):
        return f"{super().__str__()}, formato: {self.formato} e dimensione: {self.dimensione_mb} mb"