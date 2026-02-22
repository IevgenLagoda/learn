from game import Game
import unittest

class TestBowling(unittest.TestCase):
    """"""
    def setUp(self):
        self.game = Game()

    def test_all_ones(self):
        pins = [1 for i in range(11)]
        self.game.roll(11, pins)
        self.assertEqual(self.game.score, 11)

    def test_strike(self):
        self.game.roll(11, [10, 5, 4])
        self.assertEqual(self.game.score, 28)

unittest.main()