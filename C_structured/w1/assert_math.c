#include<assert.h>
#include<stdio.h>

int main(void) 
{
    double x,y;
    while (1)
    {
        printf("Read in two floats:\n");
        scanf("%lf %lf", &x, &y);
        assert(y != 0);
        printf("when divided: x/y = %lf\n", x/y);
    }
    return 0;
    
}