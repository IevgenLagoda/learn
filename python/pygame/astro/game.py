from typing import Any
import pygame

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
DKGREEN = (0, 100, 0)

class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        width = 20
        height = 15

        self.image = pygame.Surface([width, height])
        self.image.fill(BLACK)
        self.rect = self.image.get_rect()        

    def update(self):
        pos = pygame.mouse.get_pos()
        x = pos[0]
        y = pos[1]
        self.rect.x = x
        self.rect.y = y

pygame.init()

size = [700, 500]
screen = pygame.display.set_mode(size)
pygame.mouse.set_visible(False)
done = False
clock = pygame.time.Clock()
all_sprites_list = pygame.sprite.Group()
player = Player()
all_sprites_list.add(player)

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
    all_sprites_list.update()

    screen.fill(WHITE)
    all_sprites_list.draw(screen)
    clock.tick(60)
    pygame.display.flip()

pygame.quit()