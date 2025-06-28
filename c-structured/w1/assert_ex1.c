
#define NDEBUG  //Goes before <assert.h>
#include <assert.h>
#include <stdio.h>
#include <ctype.h>

int main (void)
{
    assert(0);
    printf("My program runs\n");
    return 0;
}