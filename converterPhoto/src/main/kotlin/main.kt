import com.google.gson.Gson
import java.io.File
import javax.imageio.ImageIO

data class ImgInfo(var capybara: Int, var otter: Int)

abstract class AnimalName() {
    open val name = ""
}

class Capybara() : AnimalName() {
    override val name = "capybara"
}

class Otter() : AnimalName() {
    override val name = "otter"
}

const val path = "/Users/george/Documents/Development/web/funny-animal-generator"

class Converter() {
    val animalInfo = ImgInfo(0, 0)
    fun convert(animal: AnimalName) {
        val pathToAnimal = "$path/public/${animal.name}"

        var animalCounter = 0
        var fileName = ""
        val directory = File(pathToAnimal)
        directory.deleteRecursively()
        directory.mkdirs()
        try {
            File("./${animal.name}/").walkTopDown().forEachIndexed { index, file ->
                run {
                    if (file.isFile &&
                        (file.extension == "jpeg" ||
                                file.extension == "jpg" ||
                                file.extension == "png" ||
                                file.extension == "webp")
                    ) {
                        val image = ImageIO.read(file)
                        fileName = file.name
                        ImageIO.write(image, "webp", File("$pathToAnimal/$index.webp"))
                        animalCounter++
                    }
                }

            }
        } catch (error: IllegalArgumentException) {
            println(fileName)
        }
        when (animal) {
            is Capybara -> animalInfo.capybara = animalCounter
            is Otter -> animalInfo.otter = animalCounter
        }

    }
}


fun writeStatistic(animalInfo: ImgInfo) {
    val gson = Gson()
    val jsonString = gson.toJson(animalInfo).format()
    val file = File("$path/src/assets/data.json")

    file.writeText(jsonString)
}

fun main() {
    val converter = Converter();
    converter.convert(Capybara())
    converter.convert(Otter())
    writeStatistic(converter.animalInfo)
}
