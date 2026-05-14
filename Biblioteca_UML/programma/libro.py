from mediaItem import MediaItem

class Libro(MediaItem):
    def __init__(self, titolo, anno, autore, pagine):
        super().__init__(titolo, anno)
        self.autore = autore
        self.pagine = pagine
    
    def prestito(self):
        if(self.disponibile == True):
            self.disponibile = False
        else:
            return "Il libro è ancora in prestito!"
    
    def restituzione(self):
        if(self.disponibile == False):
            self.disponibile == True
        else:
            return "Il libro è stato già restituito!"
    
    def __str__(self):
        return f"{super().__str__()}, autore: {self.autore} e pagine: {self.pagine}"