/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('song', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    SongName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SongUrl: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    Language: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    FilePath: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SingerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'singer',
        key: 'id'
      }
    },
    ComposerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'composer',
        key: 'id'
      }
    },
    TalamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'talam',
        key: 'id'
      }
    },
    RagamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ragam',
        key: 'id'
      }
    },
    DeityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'deity',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'song'
  });
};
