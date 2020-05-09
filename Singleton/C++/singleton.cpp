#include <iostream>
#include <string>

using namespace std;

// NOT USING SINGLETON
class NormalClass
{
public:
    string name = "";
};

//USING SINGLETON
class UniqueObjClass
{
private:
    // Private constructor so it can't be instaciated using 'new UniqueObjClass()'
    UniqueObjClass() {}
    ~UniqueObjClass()
    {
        delete uniqueInstance;
    }
    static UniqueObjClass *uniqueInstance;

public:
    string name = "";

    static UniqueObjClass *getInstance()
    {
        if (uniqueInstance == nullptr)
        {
            uniqueInstance = new UniqueObjClass;
        }
        return uniqueInstance;
    }
};

// Initialize pointer to NULL so that it can be initialized on fisrt call to getInstance()
UniqueObjClass *UniqueObjClass::uniqueInstance = nullptr;

int main()
{
    // Initializing normal objects
    NormalClass normalA = NormalClass();
    normalA.name = "Aron";

    NormalClass normalB = NormalClass();
    normalB.name = "Bea";

    cout << normalA.name;
    cout << (&normalA == &normalB ? " == " : " != ");
    cout << normalB.name << endl;

    // Initializing singleton object
    UniqueObjClass *time = UniqueObjClass::getInstance();
    time->name = "Time";

    UniqueObjClass *money = UniqueObjClass::getInstance();
    money->name = "Money";

    cout << "Time name: " + time->name << endl;
    cout << "Money name: " + money->name << endl;

    cout << (time == money ? "time == money" : "time != money") << endl;

    cout << "Quod erat demonstrandum.\n";

    return 0;
}
