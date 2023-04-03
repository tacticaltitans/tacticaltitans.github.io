import discord
from discord.ext import commands
import discord.ui
import os

# Carga la clave de acceso del bot desde una variable de entorno
BOT_TOKEN = os.environ.get("BOT_TOKEN")

intents = discord.Intents.all()

bot = commands.Bot(command_prefix='.', intents=intents, help_command=None)


@bot.event
async def on_ready():
    print('System rebooted.')
    bot.add_view(RoleSelectionView())


class RoleSelectionView(discord.ui.View):
    def __init__(self):
        super().__init__(timeout=None)

    @discord.ui.button(label="Get Ping", custom_id="GetPing", style=discord.ButtonStyle.secondary)
    async def button1(self, interaction: discord.Interaction, button: discord.ui.Button):
        role_id = 1092039192776814602
        user = interaction.user

        # Comprueba si el usuario tiene el rol y, si es así, elimínalo. Si no lo tiene, agrégalo.
        if role_id in [role.id for role in user.roles]:
            await user.remove_roles(user.guild.get_role(role_id))
            await interaction.response.send_message("Role removed :P, no more ping :c)", ephemeral=True)

        else:
            await user.add_roles(user.guild.get_role(role_id))
            await interaction.response.send_message("ROLE ADDED WOOOOO, SPAM TIME >:D", ephemeral=True)


@bot.command()
async def roles(ctx: discord.ext.commands.Context):
    embed = discord.Embed(title="Ping Role", description="Press for get @ping role and get ping when get new feedback :D")
    await ctx.send(embed=embed, view=RoleSelectionView())


bot.run('MTA5MjAzOTY0NTAzMTgzMzY2MA.G5o0pl.tuyffCux6DJlOma6BYlYhHfcExpjO5YtFTfQEI')