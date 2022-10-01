/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

class PowerSource {
  private energySupply = 100

  consume(energy: number) {
    if (this.energySupply >= energy) {
      this.energySupply -= energy
      console.log(`${energy} consumed`)
    } else {
      window.alert("Energy levels are not sufficient.")
      throw Error("Energy levels are not sufficient.")
    }

    if (this.energySupply === 0) {
      window.alert("No more energy available.")
      throw Error("No more energy available.")
    }
  }
}

class LightBulb {
  protected readonly powerConsumption = 20
  protected blinkInterval: number = -1
  protected turnedOnTimer: number = 0

  blink(times: number, powerSource: PowerSource) {
    this.blinkInterval = setInterval(() => {
      this.turnedOnTimer += 1
      if (this.turnedOnTimer === times) {
        clearInterval(this.blinkInterval)
        return
      }
      console.log(`consumed: ${this.turnedOnTimer}`)
      powerSource.consume(this.powerConsumption)
    }, 3000)
  }
}

const powerSource2 = new PowerSource();

const lb2 = new LightBulb()

lb2.blink(6, powerSource2)

