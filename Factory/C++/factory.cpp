#include <iostream>
#include <stdlib.h>
#include <string>

using namespace std;

enum CarModel
{
    kGeneric = 0,
    kGol = 1,
    kAmarok = 2,
    kFox = 3
};

class Car
{
public:
    string name_ = "Generic Car";

    string ToggleAirConditioner()
    {
        return "There's no physical button to toggle the AC";
    }
    string ToggleIgnition()
    {
        return "There's no physical key to start the car";
    }
    string ToggleFrontLight()
    {
        return "There's no physical lamps to toggle";
    }
};

class Gol : public Car
{
public:
    Gol()
    {
        this->name_ = "Gol";
    }
    string ToggleAirConditioner()
    {
        return "There's no AC in your Gol";
    }
    string ToggleIgnition()
    {
        return "You try to start your Gol, but nothing happens";
    }
    string ToggleFrontLight()
    {
        return "Front light toggled, but one of them is burned out.";
    }
};

class Amarok : public Car
{
public:
    Amarok()
    {
        this->name_ = "Amarok";
    }
    string ToggleAirConditioner()
    {
        return "AC toggled";
    }
    string ToggleIgnition()
    {
        return "Ignition toggled";
    }
    string ToggleFrontLight()
    {
        return "Front light toggled";
    }
};

class Fox : public Car
{
public:
    Fox()
    {
        this->name_ = "Fox";
    }
    string ToggleAirConditioner()
    {
        return "AC toggled";
    }
    string ToggleIgnition()
    {
        return "There's no physical key to start the car";
    }
    string ToggleFrontLight()
    {
        return "There's no physical lamps to toggle";
    }
};

/**
 * Car factory
 */
Car *CreateCar(CarModel model)
{
    switch (model)
    {
    case kGol:
        return new Gol;

    case kAmarok:
        return new Amarok;

    case kFox:
        return new Fox;

    default:
        return new Car;
    }
}

CarModel CarSelectionMenu()
{
    system("clear");
    cout << "Choose a car model from the options below:\n";
    cout << "1 - Gol\n";
    cout << "2 - Amarok\n";
    cout << "3 - Fox\n";
    cout << "Any key - Generic Car\n"
         << flush;

    switch ((int)cin.get() - 48) // Reads character, cast to int, substract 0's ASCII table value
    {
    case 1:
        return kGol;

    case 2:
        return kAmarok;

    case 3:
        return kFox;

    default:
        return kGeneric;
    }
}

int main()
{
    Car *MyCar;
    MyCar = CreateCar(CarSelectionMenu());

    cout << "What you wanna do with your " << MyCar->name_ << "?" << endl;

    //TODO: use member functions
    return 0;
}