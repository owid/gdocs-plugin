import {
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  CardActions,
  Button,
  Checkbox,
} from "@mui/material"
import { useState } from "preact/hooks"

export const FormatCard = () => {
  const [shouldHighlight, setShouldHighlight] = useState(true)
  const [shouldIndent, setShouldIndent] = useState(true)
  const [shouldHideRefs, setShouldHideRefs] = useState(true)

  return (
    <Card sx={{ maxWidth: 345, mb: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Format
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                value={shouldHighlight}
                onChange={(e) => setShouldHighlight(e.target.checked)}
              />
            }
            label="Highlight"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                value={shouldIndent}
                onChange={(e) => setShouldIndent(e.target.checked)}
              />
            }
            label="Indent"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                value={shouldHideRefs}
                onChange={(e) => setShouldHideRefs(e.target.checked)}
              />
            }
            label="Hide {ref}"
          />
        </FormGroup>
        <Typography variant="body2" color="text.secondary">
          Indent and/or highlight ArchieML markup. This will reveal missing or
          erroneous closing tags.
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() =>
            google.script.run.format({
              shouldIndent,
              shouldHighlight,
              shouldHideRefs,
            })
          }
        >
          Format
        </Button>
        <Button
          onClick={() =>
            google.script.run.format({
              shouldIndent: false,
              shouldHighlight: false,
              shouldHideRefs,
            })
          }
        >
          Focus mode
        </Button>
      </CardActions>
    </Card>
  )
}
