module.exports = {
    // 采用cz自定义的提交规范
    extends: ['cz'],
    rules: {
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'test',
                'chore',
                'revert',
                'ci',
                'perf',
                'build',
                'init'
            ]
        ],
        'subject-full-stop': [0, 'never'],
        'subject-empty': [2, 'never'],
        'subject-case': [0, 'never']
    }
};