#include<stdio.h>
#include<ctype.h>
#define MAX_LEN 1000
#define empty -1
#define full = MAX_LEN - 1

typedef struct stack
{
    char s[MAX_LEN];
    int top;
} stack;

void reset(stack *stk)
{
    stk -> top = empty;
}

void push(char c, stack *stk)
{
    
}
