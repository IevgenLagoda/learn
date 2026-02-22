class Vehicle:
    def __init__(self, color, doors):
        self.color = color
        self.doors = doors
    def drive(self):
        print(self.color + " is moving")

    def me(self):
        return "I'm %s color with %i doors" % (self.color, self.doors)

class Car(Vehicle):
    def load(self):
        print("Loaded")


if __name__ == "__main__":
    car = Car("red", 4)
    truck = Vehicle("black", 2)

    print(car.me())
    car.drive()
    car.load()
    print(truck.me())
    truck.drive()