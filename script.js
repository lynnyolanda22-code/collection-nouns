class MrBoxGame {
    constructor() {
        this.currentLevel = 1;
        this.moves = 0;
        this.player = { x: 0, y: 0 };
        this.boxes = [];
        this.targets = [];
        this.walls = [];
        this.gameBoard = document.getElementById('gameBoard');
        this.levelDisplay = document.getElementById('level');
        this.movesDisplay = document.getElementById('moves');
        this.victoryModal = document.getElementById('victoryModal');
        
        this.levels = [
            // 关卡 1
            {
                width: 8,
                height: 6,
                player: { x: 1, y: 1 },
                boxes: [{ x: 3, y: 2 }],
                targets: [{ x: 6, y: 4 }],
                walls: [
                    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
                    { x: 0, y: 1 }, { x: 7, y: 1 },
                    { x: 0, y: 2 }, { x: 7, y: 2 },
                    { x: 0, y: 3 }, { x: 7, y: 3 },
                    { x: 0, y: 4 }, { x: 7, y: 4 },
                    { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }
                ]
            },
            // 关卡 2
            {
                width: 8,
                height: 6,
                player: { x: 1, y: 1 },
                boxes: [{ x: 2, y: 2 }, { x: 3, y: 2 }],
                targets: [{ x: 5, y: 3 }, { x: 6, y: 4 }],
                walls: [
                    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
                    { x: 0, y: 1 }, { x: 7, y: 1 },
                    { x: 0, y: 2 }, { x: 7, y: 2 },
                    { x: 0, y: 3 }, { x: 7, y: 3 },
                    { x: 0, y: 4 }, { x: 7, y: 4 },
                    { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }
                ]
            },
            // 关卡 3
            {
                width: 8,
                height: 6,
                player: { x: 1, y: 1 },
                boxes: [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }],
                targets: [{ x: 5, y: 3 }, { x: 6, y: 3 }, { x: 5, y: 4 }],
                walls: [
                    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
                    { x: 0, y: 1 }, { x: 7, y: 1 },
                    { x: 0, y: 2 }, { x: 7, y: 2 },
                    { x: 0, y: 3 }, { x: 7, y: 3 },
                    { x: 0, y: 4 }, { x: 7, y: 4 },
                    { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }
                ]
            },
            // 关卡 4 - 更复杂的布局
            {
                width: 10,
                height: 8,
                player: { x: 1, y: 1 },
                boxes: [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }],
                targets: [{ x: 6, y: 4 }, { x: 7, y: 4 }, { x: 8, y: 4 }, { x: 6, y: 5 }],
                walls: [
                    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
                    { x: 0, y: 1 }, { x: 9, y: 1 },
                    { x: 0, y: 2 }, { x: 9, y: 2 },
                    { x: 0, y: 3 }, { x: 9, y: 3 },
                    { x: 0, y: 4 }, { x: 9, y: 4 },
                    { x: 0, y: 5 }, { x: 9, y: 5 },
                    { x: 0, y: 6 }, { x: 9, y: 6 },
                    { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 }, { x: 8, y: 7 }, { x: 9, y: 7 }
                ]
            },
            // 关卡 5 - 挑战关卡
            {
                width: 10,
                height: 8,
                player: { x: 1, y: 1 },
                boxes: [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 6, y: 2 }],
                targets: [{ x: 7, y: 4 }, { x: 8, y: 4 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 8, y: 5 }],
                walls: [
                    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
                    { x: 0, y: 1 }, { x: 9, y: 1 },
                    { x: 0, y: 2 }, { x: 9, y: 2 },
                    { x: 0, y: 3 }, { x: 9, y: 3 },
                    { x: 0, y: 4 }, { x: 9, y: 4 },
                    { x: 0, y: 5 }, { x: 9, y: 5 },
                    { x: 0, y: 6 }, { x: 9, y: 6 },
                    { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 }, { x: 8, y: 7 }, { x: 9, y: 7 }
                ]
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createLevelButtons();
        this.loadLevel(this.currentLevel);
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        document.getElementById('reset-btn').addEventListener('click', () => this.resetLevel());
        document.getElementById('nextLevelBtn').addEventListener('click', () => this.nextLevel());
        document.getElementById('closeModalBtn').addEventListener('click', () => this.closeModal());
    }
    
    createLevelButtons() {
        const levelButtonsContainer = document.getElementById('levelButtons');
        levelButtonsContainer.innerHTML = '';
        
        this.levels.forEach((level, index) => {
            const button = document.createElement('button');
            button.className = 'level-btn';
            button.textContent = index + 1;
            button.addEventListener('click', () => this.loadLevel(index + 1));
            levelButtonsContainer.appendChild(button);
        });
    }
    
    loadLevel(levelNumber) {
        if (levelNumber < 1 || levelNumber > this.levels.length) return;
        
        this.currentLevel = levelNumber;
        this.moves = 0;
        const level = this.levels[levelNumber - 1];
        
        this.player = { ...level.player };
        this.boxes = [...level.boxes];
        this.targets = [...level.targets];
        this.walls = [...level.walls];
        
        this.updateDisplay();
        this.renderBoard();
        this.updateLevelButtons();
    }
    
    renderBoard() {
        const level = this.levels[this.currentLevel - 1];
        this.gameBoard.style.gridTemplateColumns = `repeat(${level.width}, 1fr)`;
        this.gameBoard.innerHTML = '';
        
        for (let y = 0; y < level.height; y++) {
            for (let x = 0; x < level.width; x++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                
                // 检查墙壁
                if (this.walls.some(wall => wall.x === x && wall.y === y)) {
                    cell.classList.add('wall');
                    cell.textContent = '█';
                } else {
                    cell.classList.add('floor');
                    
                    // 检查目标位置
                    const isTarget = this.targets.some(target => target.x === x && target.y === y);
                    const isPlayer = this.player.x === x && this.player.y === y;
                    const box = this.boxes.find(box => box.x === x && box.y === y);
                    
                    if (isPlayer) {
                        if (isTarget) {
                            cell.classList.add('player-on-target');
                        } else {
                            cell.classList.add('player');
                        }
                        cell.textContent = '😊';
                    } else if (box) {
                        if (isTarget) {
                            cell.classList.add('box-on-target');
                        } else {
                            cell.classList.add('box');
                        }
                        cell.textContent = '📦';
                    } else if (isTarget) {
                        cell.classList.add('target');
                        cell.textContent = '★';
                    }
                }
                
                this.gameBoard.appendChild(cell);
            }
        }
    }
    
    handleKeyPress(e) {
        const directions = {
            'ArrowUp': { x: 0, y: -1 },
            'ArrowDown': { x: 0, y: 1 },
            'ArrowLeft': { x: -1, y: 0 },
            'ArrowRight': { x: 1, y: 0 }
        };
        
        const direction = directions[e.key];
        if (!direction) return;
        
        e.preventDefault();
        this.movePlayer(direction);
    }
    
    movePlayer(direction) {
        const newX = this.player.x + direction.x;
        const newY = this.player.y + direction.y;
        
        // 检查边界
        const level = this.levels[this.currentLevel - 1];
        if (newX < 0 || newX >= level.width || newY < 0 || newY >= level.height) {
            return;
        }
        
        // 检查墙壁
        if (this.walls.some(wall => wall.x === newX && wall.y === newY)) {
            return;
        }
        
        // 检查箱子
        const boxIndex = this.boxes.findIndex(box => box.x === newX && box.y === newY);
        if (boxIndex !== -1) {
            const boxNewX = newX + direction.x;
            const boxNewY = newY + direction.y;
            
            // 检查箱子移动后的位置
            if (boxNewX < 0 || boxNewX >= level.width || boxNewY < 0 || boxNewY >= level.height) {
                return;
            }
            
            if (this.walls.some(wall => wall.x === boxNewX && wall.y === boxNewY)) {
                return;
            }
            
            if (this.boxes.some(box => box.x === boxNewX && box.y === boxNewY)) {
                return;
            }
            
            // 移动箱子
            this.boxes[boxIndex] = { x: boxNewX, y: boxNewY };
        }
        
        // 移动玩家
        this.player = { x: newX, y: newY };
        this.moves++;
        
        this.updateDisplay();
        this.renderBoard();
        
        // 检查胜利条件
        if (this.checkVictory()) {
            this.showVictoryModal();
        }
    }
    
    checkVictory() {
        return this.targets.every(target => 
            this.boxes.some(box => box.x === target.x && box.y === target.y)
        );
    }
    
    showVictoryModal() {
        document.getElementById('victoryLevel').textContent = this.currentLevel;
        document.getElementById('victoryMoves').textContent = this.moves;
        this.victoryModal.style.display = 'block';
    }
    
    closeModal() {
        this.victoryModal.style.display = 'none';
    }
    
    nextLevel() {
        this.closeModal();
        if (this.currentLevel < this.levels.length) {
            this.loadLevel(this.currentLevel + 1);
        } else {
            alert('恭喜！你已经完成了所有关卡！');
        }
    }
    
    resetLevel() {
        this.loadLevel(this.currentLevel);
    }
    
    updateDisplay() {
        this.levelDisplay.textContent = this.currentLevel;
        this.movesDisplay.textContent = this.moves;
    }
    
    updateLevelButtons() {
        const buttons = document.querySelectorAll('.level-btn');
        buttons.forEach((button, index) => {
            button.classList.remove('current', 'completed');
            if (index + 1 === this.currentLevel) {
                button.classList.add('current');
            }
        });
    }
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new MrBoxGame();
});


