from mediaItem import MediaItem

class DVD(MediaItem):
    def __init__(self, titolo, anno, regista, durata):
        super().__init__(titolo, anno)
        self.regista = regista
        self.durata = durata
    
    def prestito(self):
        if(self.disponibile == True):
            self.disponibile = False
        else:
            return f"Questo DVD del film diretto da {self.regista} e che dura {self.durata} minuti è ancora in prestito!"
    
    def restituzione(self):
        if(self.disponibile == False):
            self.disponibile == True
        else:
            return "Questo DVD è già stato restituito!"
        
    def __str__(self):
        return f"{super().__str__()}, regista: {self.regista} e durata: {self.durata} minuti"