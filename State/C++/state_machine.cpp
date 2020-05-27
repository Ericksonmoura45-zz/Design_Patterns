#include <iostream>

using namespace std;

/**
 * List of states
 * Q0: even 0, even 1
 * Q1: odd 0, odd 1
 * Q2: odd 0, even 1
 * Q3: even 0, odd 1
 */
enum State
{
    kQ0,
    kQ1,
    kQ2,
    kQ3
};

class StateInterface
{
public:
    virtual void ChangeState(char digit) {}

private:
    State state_;
};

/**
 * Initial state
 * Even 0, even 1
 */
class State0 : public StateInterface
{
public:
    State0()
    {
    }
};

/**
 * Context Class
 * 
 * This machine identifies if a binary string has 
 * a odd number of 0s and even number of 1s
 */
class Machine
{
    class StateInterface *current_;

public:
    Machine();

    void SetCurrentState(StateInterface *state)
    {
        current_ = state;
    }
};

int main()
{

    return 0;
}