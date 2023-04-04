const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

router.post('/votes', async (req, res) => {
    try {
      const pollId = req.body.poll_id;
      const optionId = req.body.option_id;
      const voteType = req.body.vote_type;
      if (voteType === 'upvote') {
        await Vote.upvote(pollId, optionId);
      } else if (voteType === 'downvote') {
        await Vote.downvote(pollId, optionId);
      }
      res.status(200).end();
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

module.exports = router;