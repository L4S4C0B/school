from abc import ABC, abstractclassmethod

class MediaItem(ABC):
    def __init__(self, titolo, anno):
        self.titolo = titolo
        self.anno = anno
        self.disponibile = True
    
    @abstractclassmethod
    def prestito(self):
        pass

    @abstractclassmethod
    def restituzione(self):
        pass

    def descrivi(self):
        str = ""
        if(self.disponibile == True):
            str = "SI"
        else:
            str = "NO"
        print(f"anno: {self.anno}, titolo: {self.titolo} ,disponibile: {str}")
    
    def __str__(self):
        return f"MediaItem: {self.titolo} {self.anno}"