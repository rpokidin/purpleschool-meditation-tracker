<template>
  <div>
    <img class="profile-pic" src="../assets/profile.png" alt="">
    <h1>Добро пожаловать, Наталья!</h1>
    <p>Как вы сегодня себя чувствуете?</p>
    <ul class="meditaion-list">
      <li>
        <button>
          <div class="meditaion-list__ico">
            <img src="../assets/meditation/calm.svg" alt="">
          </div>
          <div class="meditaion-list__name">Спокойно</div>
        </button>
      </li>
      <li>
        <button>
          <div class="meditaion-list__ico">
            <img src="../assets/meditation/relax.svg" alt="">
          </div>
          <div class="meditaion-list__name">Расслабленно</div>
        </button>
      </li>
      <li>
        <button>
          <div class="meditaion-list__ico">
            <img src="../assets/meditation/focus.svg" alt="">
          </div>
          <div class="meditaion-list__name">Фокусировано</div>
        </button>
      </li>
      <li>
        <button>
          <div class="meditaion-list__ico">
            <img src="../assets/meditation/anxious.svg" alt="">
          </div>
          <div class="meditaion-list__name">Тревожно</div>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.profile-pic {
  margin-bottom: 30px;
}
h1 {
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 2px;
}
p {
  font-size: 22px;
  color: var(--white-700);
}
.meditaion-list {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
.meditaion-list button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.meditaion-list__ico {
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
  border-radius: 20px;
}
.meditaion-list button:hover .meditaion-list__ico {
  background-color: #69B09C;
}
.meditaion-list__name {
  font-size: 12px;
  color: var(--white);
}
</style>


