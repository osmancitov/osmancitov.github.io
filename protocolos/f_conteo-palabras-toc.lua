local words_per_h1 = {}
local current_h1 = nil

-- Primera pasada: Registrar los bloques y acumular palabras
function Block(el)
  if el.t == "Header" and el.level == 1 then
    current_h1 = pandoc.utils.stringify(el.content)
    words_per_h1[current_h1] = 0
  elseif current_h1 then
    local text = pandoc.utils.stringify(el)
    local _, count = string.gsub(text, "%S+", "")
    words_per_h1[current_h1] = words_per_h1[current_h1] + count
  end
end

-- Segunda pasada: Calcular páginas e inyectar el sufijo en la TOC
function Header(el)
  if el.level == 1 then
    local title_str = pandoc.utils.stringify(el.content)
    local word_count = words_per_h1[title_str] or 0
    
    -- División por 250 y redondeo hacia arriba
    local page_count = math.ceil(word_count / 250)
    
    -- Formato del sufijo: (X p.)
    local suffix = " (" .. page_count .. " p.)"
    table.insert(el.content, pandoc.Str(suffix))
    return el
  end
end

return {
  { Block = Block },
  { Header = Header }
}