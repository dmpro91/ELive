var world = new Word(
        ["####################################################",
        "#                 ####         ****              ###",
        "#   *  @  ##                 ########       OO    ##",
        "#   *    ##        O O                 ****       *#",
        "#       ##*                        ##########     *#",
        "#      ##***  *         ****                     **#",
        "#* **  #  *  ***      #########                  **#",
        "#* **  #      *               #   *              **#",
        "#     ##              #   O   #  ***          ######",
        "#*            @       #       #   *        O  #    #",
        "#*                    #  ######                 ** #",
        "###          ****          ***                  ** #",
        "#       O                        @         O       #",
        "#   *     ##  ##  ##  ##               ###      *  #",
        "#   **         #              *       #####  O     #",
        "##  **  O   O  #  #    ***  ***        ###      ** #",
        "###               #   *****                    ****#",
        "####################################################"],
    {"#": Wall,
        "@": Tiger,
        "O": PlantEater,
        "*": Plant}
);
