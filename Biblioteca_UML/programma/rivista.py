from mediaItem import MediaItem

class Rivista(MediaItem):
    def __init__(self, titolo, anno, numero, mese):
        super().__init__(titolo, anno)
        self.numero = numero
        self.mese = mese
    
    def prestito(self):
        if(self.disponibile == True):
            self.disponibile = False
        else:
            return f"La rivista n {self.numero} di {self.mese} è ancora in prestito!"
    
    def restituzione(self):
        if(self.disponibile == False):
            self.disponibile == True
        else:
            return f"La rivista è stata già restituita!"
    
    def __str__(self):
        return f"{super().__str__()}, numero: {self.numero} e mese: {self.mese}"