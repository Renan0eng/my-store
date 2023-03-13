import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Modal from '@mui/joy/Modal';

import Dropzone from 'react-dropzone';

// Icons import
import FolderIcon from '@mui/icons-material/Folder';
import { IconButton } from '@mui/joy';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function ImagePicker({ setFiles, files}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openImage, setOpenImage] = React.useState(false);
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

  const [image, setImage] = React.useState({});

  const limitString = (string, limit) => {
    if (string.length > limit) {
      return string.substring(0, limit) + '...';
    }
    return string;
  };

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <Typography level="body3" color="primary">Arraste e solte os arquivos aqui</Typography>;
    }
    if (isDragReject) {
      return <Typography level="body3" color="error">Arquivo não suportado</Typography>;
    }
    return <Typography level="body3" color="primary">Solte os arquivos aqui</Typography>;
  };
  

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        '& > div': {
          boxShadow: 'none',
          '--Card-padding': '0px',
          '--Card-radius': theme.vars.radius.sm,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mb: 3,
          '& > div': {
            boxShadow: 'none',
            '--Card-padding': '0px',
            '--Card-radius': theme.vars.radius.sm,
          },
        })}
      >
        <Card variant="outlined" orientation="horizontal">
          <CardOverflow>
            <AspectRatio ratio="1" sx={{ minWidth: 80 }}
              onClick={() => {
                handleOpen();
              }}
            >
              <Box>
                <FolderIcon />
              </Box>
            </AspectRatio>
          </CardOverflow>
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <Typography level="body2" color="primary">
              Image
            </Typography>
            <Typography pt={0.5} level="body4" >max 100 MB</Typography>
          </Box>
        </Card>
        {files && files.map((file) => (
          <>
            <Card variant="outlined" orientation="horizontal">
              <CardOverflow>
                <AspectRatio ratio="1" sx={{ minWidth: 80 }}
                  onClick={() => {
                    handleOpenImage();
                    setImage(file);
                  }}
                >
                  <img
                    src={file.preview}
                    srcSet={file.preview}
                  />
                </AspectRatio>
              </CardOverflow>
              <Box sx={{ p: { xs: 1, sm: 2 } }}>
                <Typography level="body2" color="primary">
                  {limitString(file.name, 8)}
                </Typography>
                <Typography level="body3">{(file.size / (1024 * 1024)).toFixed(2)} MB</Typography>
              </Box>
            </Card>

            <Modal
              open={openImage}
              onClose={handleCloseImage}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  bgcolor: 'background.paper',
                  border: '2px solid',
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 'xl',
                }}
              >
                <img
                  src={image.preview}
                  srcSet={image.preview}
                  width="100%"
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {image.name}
                </Typography>
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    m: 2,
                  }}
                  onClick={() => {
                    const copy = files;
                    const index = copy.indexOf(image);
                    if (index > -1) {
                      copy.splice(index, 1);
                    }
                    setFiles(copy);
                    handleCloseImage();
                  }}
                >
                  <DeleteIcon fontSize="small" sx={{
                    color: 'grey.500',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }} />
                </IconButton>
              </Box>

            </Modal>
          </>
        ))}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            border: '2px solid',
            boxShadow: 24,
            p: 4,
            borderRadius: 'xl',
          }}>
            <Typography sx={{ color: '#1cb2c4', fontSize: 30, pb: 4 }} id="modal-modal-title" variant="h6" component="h2" >
              Upload Image
            </Typography>

            <Dropzone accept={"image/*"} onDrop={acceptedFiles => {
              const copy = files;
              const image = (acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
              })));
              copy.push(image[0]);
              setFiles(copy);
              handleClose();
            }}>
              {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <Box
                  sx={{
                    width: '100%',
                    height: 200,
                    border: '1px dashed',
                    borderColor: 'grey.500',
                    borderRadius: 'xl',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <Box
                    sx={{
                      p: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <CloudUploadIcon color='#fff' sx={{ fontSize: 40 }} />{renderDragMessage(isDragActive, isDragReject)}
                  </Box>


                </Box>
              )}
            </Dropzone>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

export default ImagePicker;