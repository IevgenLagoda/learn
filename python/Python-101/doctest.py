def double(x):
    """
    >>> double(4)
    8
    >>> double(0)
    1
    """
    return x*2

import doctest

doctest.testmod(verbose=True)